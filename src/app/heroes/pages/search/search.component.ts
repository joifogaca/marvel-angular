import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import { Hero, ResponseHero } from '../../model/request.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  //response$ : ResponseModel;
  heroes!: Hero[];
  loading: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    console.log("ng-onit")
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      map(value => value.trim()),
      //filter(value => value.length > 3),
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        this.loading = true;
        return this.heroesService.getHeroes(term);
      }),
    ).subscribe(
      (value: ResponseHero) => {
        this.heroes = value.data.results;
        this.loading = false;
      }
    );
  }
}

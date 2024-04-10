import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero, ResponseHero } from '../../model/request.interface';
import { HeroesService } from '../../services/heroes.service';

import {
  debounceTime, distinctUntilChanged, switchMap, tap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  //response$ : ResponseModel;
  heroes!: Hero[];
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService) { }

  search(term: string): void {
    console.log('search' + term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    console.log("ng-onit")
    this.searchTerms.pipe(
      tap((value: string) => console.log("valo " + value)),
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        return this.heroesService.getHeroes(term);
      }),
    ).subscribe(
      (value: ResponseHero) => {
        this.heroes = value.data.results;
        console.log(this.heroes)
      }
    );
  }

}

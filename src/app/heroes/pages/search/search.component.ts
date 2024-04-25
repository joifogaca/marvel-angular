import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs/operators';
import { Character } from './../../model/Character';

import { Hero } from '../../model/request.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  //response$ : ResponseModel;
  heroes!: Hero[];
  characters!: Observable<Character[]>;
  loading: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.characters = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      finalize(() => this.loading = false),
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(() => this.loading = true ),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroesService.getHeroesByName(term)),

      map(value => value))
      //tap({ finalize: () => this.loading = false }),

  }
}

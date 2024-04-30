import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Character } from './../../model/Character';

import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {


  characters$!: Observable<Character[]>;
  loading!: boolean;
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.characters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(() => this.loading = true),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroesService.getHeroesByName(term)),
      tap(() => this.loading = false),
      map(value => value),
    )}

    onComics(character: Character) {
      this.router.navigate(['comics', character.id], { relativeTo: this.route })
      }

      onSeries(character: Character) {
        this.router.navigate(['series', character.id], { relativeTo: this.route })
      }
}

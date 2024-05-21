import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Character } from './../../model/Character';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  noHeroReturned?: boolean;
  characters$!: Observable<Character[]>;
  loading!: boolean;
  @ViewChild('searchBox') searchBoxRef!: ElementRef;
  searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  clear(){
    this.searchBoxRef.nativeElement.value = '';
    this.searchTerms.next('');
    this.loading = false;
    this.noHeroReturned = false;
  }

  ngOnInit(): void {

    this.characters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      map(value => value.trim()),
      //filter(value => value.length > 1),
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(() => {this.loading = true, this.noHeroReturned = false}),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroesService.getHeroesByName(term)),
      tap((value) =>{
        this.noHeroReturned = value.count === 0;
        this.loading = false;}
      ),
      map(value => value.results),
    );
  }

    onComics(character: Character) {
      this.router.navigate(['comics', character.id], { relativeTo: this.route, queryParams: { nome: character.name } })
      }

      onSeries(character: Character) {
        this.router.navigate(['comics', character.id], { relativeTo: this.route, queryParams: { nome: character.name } })
      }
}

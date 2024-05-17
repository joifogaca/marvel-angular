import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Character } from './../../model/Character';

import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  noHeroReturned?: boolean;
  inputSearch: string = '';
  characters$!: Observable<Character[]>;
  loading!: boolean;
  @ViewChild('searchBox') searchBoxRef!: ElementRef;
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  clear(){
    this.searchBoxRef.nativeElement.value = '';
    // this.characters$ = this.characters$.pipe(
    //   map(()=>[])
    // );
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
      tap((value) =>{if(value.length <= 0)
        {this.noHeroReturned = true;
          console.log(value);
        this.loading = false;}
      }),
      map(value => value),
    )}

    onComics(character: Character) {
      this.router.navigate(['comics', character.id], { relativeTo: this.route, queryParams: { nome: character.name } })
      }

      onSeries(character: Character) {
        this.router.navigate(['comics', character.id], { relativeTo: this.route, queryParams: { nome: character.name } })
      }
}

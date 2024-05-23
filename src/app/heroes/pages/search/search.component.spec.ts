import { Character } from './../../model/Character';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { SearchComponent } from './search.component';
import { HeroesService } from '../../services/heroes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let heroesService: HeroesService;
  let HeroesServiceSpy: jasmine.SpyObj<HeroesService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    HeroesServiceSpy = jasmine.createSpyObj<HeroesService>('HeroesService',
     ['getHeroesByName']);
     routerSpy = jasmine.createSpyObj(['navigate']);
     activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['']);
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: HeroesService, useValue: HeroesServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should make a call to the Service by typing in the search field', () => {
    const error = fixture.nativeElement.querySelector('#searchBox');
    //pegar o campo de pesquisa
    //dectar mudança do digitar
    //pega o valor da mudança
    //verificar se foi chamado o service com o valor da pesquisa
  });
  it('should clear search box and reset states when clear is called', () => {
    const inputElement = fixture.nativeElement.querySelector('#search-box');
    const btnClearElement = fixture.nativeElement.querySelector('#btn-clear');

    inputElement.value = 'test';
    //component.searchBoxRef = { nativeElement: inputElement };
    component.loading = true;
    component.noHeroReturned = true;

    //component.clear();
    btnClearElement.click();
    fixture.detectChanges();

    expect(component.searchBoxRef.nativeElement.value).toBe('');
    expect(component.loading).toBeFalse();
    expect(component.noHeroReturned).toBeFalse();
  });
  it('should update searchTerms when a new value is typed', async () => {
    const inputElement = fixture.nativeElement.querySelector('#search-box');
    const searchTerm = 'hero';
    inputElement.value = searchTerm;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.searchTerms.subscribe(term => {
      expect(term).toBe(searchTerm);
    });
  });
  it('should navigate to comics screen when onComics', () => {
    const character = {  id: '1',
  name: 'hero',
  description: 'hero',
  thumbnail: { path: 'path',
    extension: 'extenxion' },
  comics: {items: [],
    available: 0},
  series: {items: [],
    available: 0}}

    const spy = routerSpy.navigate as jasmine.Spy;

    component.onComics(character); // trigger action
    expect(spy).toHaveBeenCalledWith(
      ['comics', character.id],
      { relativeTo: activatedRouteSpy, queryParams: { nome: character.name } }
    );
  });
  it('should navigate to comics screen when onSeries', () => {
    const character = {  id: '1',
  name: 'hero',
  description: 'hero',
  thumbnail: { path: 'path',
    extension: 'extenxion' },
  comics: {items: [],
    available: 0},
  series: {items: [],
    available: 0}}

    const spy = routerSpy.navigate as jasmine.Spy;

    component.onSeries(character); // trigger action
    expect(spy).toHaveBeenCalledWith(
      ['series', character.id],
      { relativeTo: activatedRouteSpy, queryParams: { nome: character.name } }
    );
  });
});

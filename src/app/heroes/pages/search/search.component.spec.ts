import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { dataHeroesMock, heroMock } from '../../services/heroes.mock';
import { HeroesService } from '../../services/heroes.service';
import { SearchComponent } from './search.component';

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
  xit('should make a call to the Service by typing in the search field',fakeAsync(() => {

    const inputElement = fixture.nativeElement.querySelector('#search-box');
    const searchTerm = 'hero';
    inputElement.value = searchTerm;
    HeroesServiceSpy.getHeroesByName.withArgs(searchTerm).and.returnValue(of(dataHeroesMock));

    inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick(300);
      console.log(component.searchTerms);

    //component.search(arg);
      component.searchTerms.subscribe((value) => {
        const heroes: HTMLElement[] = fixture.nativeElement.querySelectorAll('.card-body');
        console.log(value);
      console.log(heroes.length);
      })



    //pegar o campo de pesquisa
    //dectar mudança do digitar
    //pega o valor da mudança
    //verificar se foi chamado o service com o valor da pesquisa
  }));
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
 xit('should update searchTerms when a new value is typed', async () => {
    const inputElement = fixture.nativeElement.querySelector('#search-box');
    const searchTerm = 'hero';
    inputElement.value = searchTerm;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();


     // expect(term).toBe(searchTerm);

  });
  it('should navigate to comics screen when onComics', () => {
    const character = heroMock;

    const spy = routerSpy.navigate as jasmine.Spy;

    component.onComics(character); // trigger action
    expect(spy).toHaveBeenCalledWith(
      ['comics', character.id],
      { relativeTo: activatedRouteSpy, queryParams: { nome: character.name } }
    );
  });
  it('should navigate to comics screen when onSeries', () => {
    const character = heroMock;
    const spy = routerSpy.navigate as jasmine.Spy;

    component.onSeries(character); // trigger action
    expect(spy).toHaveBeenCalledWith(
      ['series', character.id],
      { relativeTo: activatedRouteSpy, queryParams: { nome: character.name } }
    );
  });
});

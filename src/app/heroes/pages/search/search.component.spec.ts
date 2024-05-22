import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { SearchComponent } from './search.component';
import { HeroesService } from '../../services/heroes.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let heroesService: HeroesService;
  let HeroesServiceSpy: jasmine.SpyObj<HeroesService>;

  beforeEach(async () => {
    HeroesServiceSpy = jasmine.createSpyObj<HeroesService>('HeroesService',
     ['getHeroesByName']);
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [{ provide: HeroesService, useValue: HeroesServiceSpy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    heroesService = TestBed.inject(HeroesService);
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
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { SearchComponent } from './search.component';
import { HeroesService } from '../../services/heroes.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let heroesService: HeroesService;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HeroesService', ['getHeroesByName']);
    let getHeroesByName = spy.getHeroesByName.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: HeroesService, useValue: spy }]
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
});

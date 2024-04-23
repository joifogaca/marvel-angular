import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { HeroesService } from '../../services/HeroesService';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    const heroesService = jasmine.createSpyObj('HeroesService', ['getParticipationByHero']);
    let getParticipationByHeroSpy = heroesService.getParticipationByHero.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: HeroesService, useValue: heroesService }]
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
});

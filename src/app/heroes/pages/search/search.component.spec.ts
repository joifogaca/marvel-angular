import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { of } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

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
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSessionComponent } from './card-session.component';
import { HeroesService } from '../../services/heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CardSessionComponent', () => {
  let component: CardSessionComponent;
  let fixture: ComponentFixture<CardSessionComponent>;

  beforeEach(async () => {
    const heroesService = jasmine.createSpyObj('HeroesService', ['getParticipationByHero']);
    let getParticipationByHeroSpy = heroesService.getParticipationByHero.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [CardSessionComponent],
      providers: [{ provide: HeroesService, useValue: heroesService }]
    })
    .compileComponents();
// UserService actually injected into the component

    fixture = TestBed.createComponent(CardSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.id = '1';
    component.title = 'test';
    expect(component).toBeTruthy();
  });
});

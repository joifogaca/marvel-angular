import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroesService } from '../../services/HeroesService';
import { CardSessionComponent } from './card-session.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';



const mockParticipations =
{
  code: '200',
  status: 'sucesso',
  data: {
    results: [{
      title: 'test',
      description: 'test',
      thumbnail: null
    }]
  }
};

describe('CardSessionComponent', () => {
  let component: CardSessionComponent;
  let fixture: ComponentFixture<CardSessionComponent>;
  let heroesService;
  let getParticipationByHeroSpy: jasmine.Spy;
  beforeEach(() => {
    heroesService = jasmine.createSpyObj('HeroesService', ['getParticipationByHero']);
    getParticipationByHeroSpy = heroesService.getParticipationByHero.and.returnValue(of(mockParticipations));
    TestBed
      .configureTestingModule({
        declarations: [CardSessionComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: HeroesService, useValue: heroesService }]
      })
      .compileComponents();
    // UserService actually injected into the component

    fixture = TestBed.createComponent(CardSessionComponent);
    component = fixture.componentInstance;
    component.id = '1';
    component.title = 'test';
    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
  it('should call heroService', waitForAsync(() => {
    expect(getParticipationByHeroSpy)
      .toHaveBeenCalledWith(component.title, component.id);
  }));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParticipationComponent } from './card-participation.component';

describe('CardParticipationComponent', () => {
  let component: CardParticipationComponent;
  let fixture: ComponentFixture<CardParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardParticipationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

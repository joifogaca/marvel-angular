import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparancesComponent } from './apparances.component';

describe('ApparancesComponent', () => {
  let component: ApparancesComponent;
  let fixture: ComponentFixture<ApparancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApparancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApparancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

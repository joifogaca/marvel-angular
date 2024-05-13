import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparancesComponent } from './apparances.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApparancesComponent', () => {
  let component: ApparancesComponent;
  let fixture: ComponentFixture<ApparancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApparancesComponent],
      imports: [
        RouterTestingModule
      ]
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

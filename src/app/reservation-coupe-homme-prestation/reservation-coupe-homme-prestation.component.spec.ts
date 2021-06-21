import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCoupeHommePrestationComponent } from './reservation-coupe-homme-prestation.component';

describe('ReservationCoupeHommePrestationComponent', () => {
  let component: ReservationCoupeHommePrestationComponent;
  let fixture: ComponentFixture<ReservationCoupeHommePrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCoupeHommePrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCoupeHommePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

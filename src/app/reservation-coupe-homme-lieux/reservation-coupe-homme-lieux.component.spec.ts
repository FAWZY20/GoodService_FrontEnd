import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCoupeHommeLieuxComponent } from './reservation-coupe-homme-lieux.component';

describe('ReservationCoupeHommeLieuxComponent', () => {
  let component: ReservationCoupeHommeLieuxComponent;
  let fixture: ComponentFixture<ReservationCoupeHommeLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCoupeHommeLieuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCoupeHommeLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

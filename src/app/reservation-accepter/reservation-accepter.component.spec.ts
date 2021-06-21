import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAccepterComponent } from './reservation-accepter.component';

describe('ReservationAccepterComponent', () => {
  let component: ReservationAccepterComponent;
  let fixture: ComponentFixture<ReservationAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

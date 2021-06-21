import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReservationComponent } from './header-reservation.component';

describe('HeaderReservationComponent', () => {
  let component: HeaderReservationComponent;
  let fixture: ComponentFixture<HeaderReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

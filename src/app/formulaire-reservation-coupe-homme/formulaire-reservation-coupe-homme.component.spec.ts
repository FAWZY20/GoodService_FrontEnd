import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReservationCoupeHommeComponent } from './formulaire-reservation-coupe-homme.component';

describe('FormulaireReservationCoupeHommeComponent', () => {
  let component: FormulaireReservationCoupeHommeComponent;
  let fixture: ComponentFixture<FormulaireReservationCoupeHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireReservationCoupeHommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireReservationCoupeHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

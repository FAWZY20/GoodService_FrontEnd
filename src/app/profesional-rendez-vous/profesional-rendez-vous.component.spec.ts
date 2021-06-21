import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalRendezVousComponent } from './profesional-rendez-vous.component';

describe('ProfesionalRendezVousComponent', () => {
  let component: ProfesionalRendezVousComponent;
  let fixture: ComponentFixture<ProfesionalRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

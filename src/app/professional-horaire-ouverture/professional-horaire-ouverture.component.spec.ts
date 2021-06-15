import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalHoraireOuvertureComponent } from './professional-horaire-ouverture.component';

describe('ProfessionalHoraireOuvertureComponent', () => {
  let component: ProfessionalHoraireOuvertureComponent;
  let fixture: ComponentFixture<ProfessionalHoraireOuvertureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalHoraireOuvertureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalHoraireOuvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

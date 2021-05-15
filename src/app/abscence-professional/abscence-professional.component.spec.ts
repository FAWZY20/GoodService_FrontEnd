import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceProfessionalComponent } from './abscence-professional.component';

describe('AbscenceProfessionalComponent', () => {
  let component: AbscenceProfessionalComponent;
  let fixture: ComponentFixture<AbscenceProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbscenceProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbscenceProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

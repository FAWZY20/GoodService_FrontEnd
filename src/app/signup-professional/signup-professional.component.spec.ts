import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProfessionalComponent } from './signup-professional.component';

describe('SignupProfessionalComponent', () => {
  let component: SignupProfessionalComponent;
  let fixture: ComponentFixture<SignupProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrixPrestationComponent } from './form-prix-prestation.component';

describe('FormPrixPrestationComponent', () => {
  let component: FormPrixPrestationComponent;
  let fixture: ComponentFixture<FormPrixPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPrixPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrixPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

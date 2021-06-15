import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionProfessionalComponent } from './connexion-professional.component';

describe('ConnexionProfessionalComponent', () => {
  let component: ConnexionProfessionalComponent;
  let fixture: ComponentFixture<ConnexionProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

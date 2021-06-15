import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousCoiffureMenComponent } from './rendez-vous-coiffure-men.component';

describe('RendezVousCoiffureMenComponent', () => {
  let component: RendezVousCoiffureMenComponent;
  let fixture: ComponentFixture<RendezVousCoiffureMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousCoiffureMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousCoiffureMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

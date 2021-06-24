import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoraireComponent } from './add-horaire.component';

describe('AddHoraireComponent', () => {
  let component: AddHoraireComponent;
  let fixture: ComponentFixture<AddHoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHoraireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

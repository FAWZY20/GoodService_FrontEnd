import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixPrestationComponent } from './prix-prestation.component';

describe('PrixPrestationComponent', () => {
  let component: PrixPrestationComponent;
  let fixture: ComponentFixture<PrixPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationCoupeHommeComponent } from './prestation-coupe-homme.component';

describe('PrestationCoupeHommeComponent', () => {
  let component: PrestationCoupeHommeComponent;
  let fixture: ComponentFixture<PrestationCoupeHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationCoupeHommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationCoupeHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

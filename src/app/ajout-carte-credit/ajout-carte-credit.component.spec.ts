import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCarteCreditComponent } from './ajout-carte-credit.component';

describe('AjoutCarteCreditComponent', () => {
  let component: AjoutCarteCreditComponent;
  let fixture: ComponentFixture<AjoutCarteCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCarteCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCarteCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

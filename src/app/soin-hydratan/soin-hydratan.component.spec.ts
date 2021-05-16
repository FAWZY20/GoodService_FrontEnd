import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinHydratanComponent } from './soin-hydratan.component';

describe('SoinHydratanComponent', () => {
  let component: SoinHydratanComponent;
  let fixture: ComponentFixture<SoinHydratanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinHydratanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinHydratanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

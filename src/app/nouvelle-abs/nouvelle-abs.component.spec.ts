import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleAbsComponent } from './nouvelle-abs.component';

describe('NouvelleAbsComponent', () => {
  let component: NouvelleAbsComponent;
  let fixture: ComponentFixture<NouvelleAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleAbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

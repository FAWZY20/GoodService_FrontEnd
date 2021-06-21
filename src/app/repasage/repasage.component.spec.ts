import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasageComponent } from './repasage.component';

describe('RepasageComponent', () => {
  let component: RepasageComponent;
  let fixture: ComponentFixture<RepasageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepasageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

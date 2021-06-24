import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteUserComponent } from './carte-user.component';

describe('CarteUserComponent', () => {
  let component: CarteUserComponent;
  let fixture: ComponentFixture<CarteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

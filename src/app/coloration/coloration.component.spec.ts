import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorationComponent } from './coloration.component';

describe('ColorationComponent', () => {
  let component: ColorationComponent;
  let fixture: ComponentFixture<ColorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

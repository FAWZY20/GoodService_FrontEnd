import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushingComponent } from './brushing.component';

describe('BrushingComponent', () => {
  let component: BrushingComponent;
  let fixture: ComponentFixture<BrushingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrushingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

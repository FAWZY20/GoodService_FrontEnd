import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdoComponent } from './abdo.component';

describe('AbdoComponent', () => {
  let component: AbdoComponent;
  let fixture: ComponentFixture<AbdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

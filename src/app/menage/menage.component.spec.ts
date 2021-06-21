import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageComponent } from './menage.component';

describe('MenageComponent', () => {
  let component: MenageComponent;
  let fixture: ComponentFixture<MenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

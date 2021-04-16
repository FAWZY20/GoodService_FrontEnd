import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenPaimenetUserComponent } from './moyen-paimenet-user.component';

describe('MoyenPaimenetUserComponent', () => {
  let component: MoyenPaimenetUserComponent;
  let fixture: ComponentFixture<MoyenPaimenetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenPaimenetUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenPaimenetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

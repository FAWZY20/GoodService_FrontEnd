import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHorizontalUserComponent } from './header-horizontal-user.component';

describe('HeaderHorizontalUserComponent', () => {
  let component: HeaderHorizontalUserComponent;
  let fixture: ComponentFixture<HeaderHorizontalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHorizontalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHorizontalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

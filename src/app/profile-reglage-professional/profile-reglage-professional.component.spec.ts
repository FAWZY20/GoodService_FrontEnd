import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReglageProfessionalComponent } from './profile-reglage-professional.component';

describe('ProfileReglageProfessionalComponent', () => {
  let component: ProfileReglageProfessionalComponent;
  let fixture: ComponentFixture<ProfileReglageProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReglageProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReglageProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

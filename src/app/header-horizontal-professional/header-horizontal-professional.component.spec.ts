import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHorizontalProfessionalComponent } from './header-horizontal-professional.component';

describe('HeaderHorizontalProfessionalComponent', () => {
  let component: HeaderHorizontalProfessionalComponent;
  let fixture: ComponentFixture<HeaderHorizontalProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHorizontalProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHorizontalProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

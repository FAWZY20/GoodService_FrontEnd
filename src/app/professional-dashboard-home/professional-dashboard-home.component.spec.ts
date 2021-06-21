import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDashboardHomeComponent } from './professional-dashboard-home.component';

describe('ProfessionalDashboardHomeComponent', () => {
  let component: ProfessionalDashboardHomeComponent;
  let fixture: ComponentFixture<ProfessionalDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDashboardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

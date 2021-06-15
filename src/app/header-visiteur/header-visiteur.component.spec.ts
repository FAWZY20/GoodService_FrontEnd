import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVisiteurComponent } from './header-visiteur.component';

describe('HeaderVisiteurComponent', () => {
  let component: HeaderVisiteurComponent;
  let fixture: ComponentFixture<HeaderVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

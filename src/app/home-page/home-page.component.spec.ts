import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePAgeComponent } from './home-page.component';

describe('HomePAgeComponent', () => {
  let component: HomePAgeComponent;
  let fixture: ComponentFixture<HomePAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

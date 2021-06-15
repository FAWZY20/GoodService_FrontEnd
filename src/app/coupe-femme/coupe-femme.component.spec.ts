import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeFemmeComponent } from './coupe-femme.component';

describe('CoupeFemmeComponent', () => {
  let component: CoupeFemmeComponent;
  let fixture: ComponentFixture<CoupeFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupeFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

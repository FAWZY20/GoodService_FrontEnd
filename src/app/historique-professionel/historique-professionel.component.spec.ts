import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueProfessionelComponent } from './historique-professionel.component';

describe('HistoriqueProfessionelComponent', () => {
  let component: HistoriqueProfessionelComponent;
  let fixture: ComponentFixture<HistoriqueProfessionelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueProfessionelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueProfessionelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

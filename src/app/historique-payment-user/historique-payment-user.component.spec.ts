import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePaymentUserComponent } from './historique-payment-user.component';

describe('HistoriquePaymentUserComponent', () => {
  let component: HistoriquePaymentUserComponent;
  let fixture: ComponentFixture<HistoriquePaymentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePaymentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePaymentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

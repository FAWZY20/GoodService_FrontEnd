import { TestBed } from '@angular/core/testing';

import { RegistationService } from './registation.service';

describe('RegistationService', () => {
  let service: RegistationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

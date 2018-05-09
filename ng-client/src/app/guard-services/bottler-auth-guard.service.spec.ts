import { TestBed, inject } from '@angular/core/testing';

import { BottlerAuthGuardService } from './bottler-auth-guard.service';

describe('BottlerAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottlerAuthGuardService]
    });
  });

  it('should be created', inject([BottlerAuthGuardService], (service: BottlerAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

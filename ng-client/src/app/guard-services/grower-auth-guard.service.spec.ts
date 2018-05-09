import { TestBed, inject } from '@angular/core/testing';

import { GrowerAuthGuardService } from './grower-auth-guard.service';

describe('GrowerAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrowerAuthGuardService]
    });
  });

  it('should be created', inject([GrowerAuthGuardService], (service: GrowerAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

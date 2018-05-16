import { TestBed, inject } from '@angular/core/testing';

import { GrowerAuthGuard } from './grower-auth-guard.service';

describe('GrowerAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrowerAuthGuard]
    });
  });

  it('should be created', inject([GrowerAuthGuard], (service: GrowerAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});

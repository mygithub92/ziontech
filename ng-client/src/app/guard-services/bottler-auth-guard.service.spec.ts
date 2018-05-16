import { TestBed, inject } from '@angular/core/testing';

import { BottlerAuthGuard } from './bottler-auth-guard.service';

describe('BottlerAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottlerAuthGuard]
    });
  });

  it('should be created', inject([BottlerAuthGuard], (service: BottlerAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});

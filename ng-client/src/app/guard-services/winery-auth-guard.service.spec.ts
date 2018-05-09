import { TestBed, inject } from '@angular/core/testing';

import { WineryAuthGuardService } from './winery-auth-guard.service';

describe('WineryAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineryAuthGuardService]
    });
  });

  it('should be created', inject([WineryAuthGuardService], (service: WineryAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

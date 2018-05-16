import { TestBed, inject } from '@angular/core/testing';

import { WineryAuthGuard } from './winery-auth-guard.service';

describe('WineryAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineryAuthGuard]
    });
  });

  it('should be created', inject([WineryAuthGuard], (service: WineryAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AuthenticationHelperService } from './authentication-helper.service';

describe('AuthenticationHelperService', () => {
  let service: AuthenticationHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

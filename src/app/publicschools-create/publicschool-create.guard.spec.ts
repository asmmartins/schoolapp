import { TestBed } from '@angular/core/testing';

import { PublicSchoolCreateGuard } from './publicschool-create.guard';

describe('PublicSchoolCreateGuard', () => {
  let guard: PublicSchoolCreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicSchoolCreateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

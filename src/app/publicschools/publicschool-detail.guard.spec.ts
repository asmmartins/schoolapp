import { TestBed } from '@angular/core/testing';

import { PublicSchoolDetailGuard } from './publicschool-detail.guard';

describe('PublicSchoolDetailGuard', () => {
  let guard: PublicSchoolDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicSchoolDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

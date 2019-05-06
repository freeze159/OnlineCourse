import { TestBed, async, inject } from '@angular/core/testing';

import { CheckOwnGuard } from './check-own.guard';

describe('CheckOwnGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckOwnGuard]
    });
  });

  it('should ...', inject([CheckOwnGuard], (guard: CheckOwnGuard) => {
    expect(guard).toBeTruthy();
  }));
});

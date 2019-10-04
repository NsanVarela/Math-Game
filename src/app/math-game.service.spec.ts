import { TestBed } from '@angular/core/testing';

import { MathGameService } from './math-game.service';

describe('MathGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathGameService = TestBed.get(MathGameService);
    expect(service).toBeTruthy();
  });
});

import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LineScoreService } from './line-score.service';

describe('LineScore Service', () => {
  beforeEachProviders(() => [LineScoreService]);

  it('should ...',
      inject([LineScoreService], (service: LineScoreService) => {
    expect(service).toBeTruthy();
  }));
});

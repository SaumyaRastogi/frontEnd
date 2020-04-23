import { TestBed } from '@angular/core/testing';

import { CancerPredictionService } from './cancer-prediction.service';

describe('CancerPredictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancerPredictionService = TestBed.get(CancerPredictionService);
    expect(service).toBeTruthy();
  });
});

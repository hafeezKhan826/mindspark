/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RewardsService } from './rewards.service';

describe('Service: Rewards', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RewardsService]
    });
  });

  it('should ...', inject([RewardsService], (service: RewardsService) => {
    expect(service).toBeTruthy();
  }));
});
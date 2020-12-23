/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PredlogService } from './predlog.service';

describe('Service: Predlog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredlogService]
    });
  });

  it('should ...', inject([PredlogService], (service: PredlogService) => {
    expect(service).toBeTruthy();
  }));
});

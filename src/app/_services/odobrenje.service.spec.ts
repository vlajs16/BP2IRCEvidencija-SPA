/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OdobrenjeService } from './odobrenje.service';

describe('Service: Odobrenje', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdobrenjeService]
    });
  });

  it('should ...', inject([OdobrenjeService], (service: OdobrenjeService) => {
    expect(service).toBeTruthy();
  }));
});

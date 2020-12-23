/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PozicijaService } from './pozicija.service';

describe('Service: Pozicija', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PozicijaService]
    });
  });

  it('should ...', inject([PozicijaService], (service: PozicijaService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZaposleniService } from './zaposleni.service';

describe('Service: Zaposleni', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZaposleniService]
    });
  });

  it('should ...', inject([ZaposleniService], (service: ZaposleniService) => {
    expect(service).toBeTruthy();
  }));
});

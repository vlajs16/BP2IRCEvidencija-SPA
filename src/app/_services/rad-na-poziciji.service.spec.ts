/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RadNaPozicijiService } from './rad-na-poziciji.service';

describe('Service: RadNaPoziciji', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RadNaPozicijiService]
    });
  });

  it('should ...', inject([RadNaPozicijiService], (service: RadNaPozicijiService) => {
    expect(service).toBeTruthy();
  }));
});

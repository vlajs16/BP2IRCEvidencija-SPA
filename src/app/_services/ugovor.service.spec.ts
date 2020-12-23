/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UgovorService } from './ugovor.service';

describe('Service: Ugovor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UgovorService]
    });
  });

  it('should ...', inject([UgovorService], (service: UgovorService) => {
    expect(service).toBeTruthy();
  }));
});

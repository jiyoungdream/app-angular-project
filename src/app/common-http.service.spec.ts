/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonHttpService } from './common-http.service';

describe('CommonHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonHttpService]
    });
  });

  it('should ...', inject([CommonHttpService], (service: CommonHttpService) => {
    expect(service).toBeTruthy();
  }));
});

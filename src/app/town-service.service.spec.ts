import { TestBed, inject } from '@angular/core/testing';

import { TownServiceService } from './town-service.service';

describe('TownServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownServiceService]
    });
  });

  it('should be created', inject([TownServiceService], (service: TownServiceService) => {
    expect(service).toBeTruthy();
  }));
});

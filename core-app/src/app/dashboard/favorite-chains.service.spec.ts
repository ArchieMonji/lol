import { TestBed, inject } from '@angular/core/testing';

import { FavoriteChainsService } from './favorite-chains.service';

describe('FavoriteChainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteChainsService]
    });
  });

  it('should be created', inject([FavoriteChainsService], (service: FavoriteChainsService) => {
    expect(service).toBeTruthy();
  }));
});

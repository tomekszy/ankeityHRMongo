import { TestBed, inject } from '@angular/core/testing';

import { AnkietaService } from './ankieta.service';

describe('AnkietaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnkietaService]
    });
  });

  it('should be created', inject([AnkietaService], (service: AnkietaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PedagogiaService } from './pedagogia.service';

describe('PedagogiaService', () => {
  let service: PedagogiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedagogiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

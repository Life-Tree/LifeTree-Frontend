import { TestBed } from '@angular/core/testing';

import { PedagogicService } from './pedagogic.service';

describe('PedagogicService', () => {
  let service: PedagogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedagogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

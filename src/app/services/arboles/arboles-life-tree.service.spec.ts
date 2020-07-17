import { TestBed } from '@angular/core/testing';

import { ArbolesLifeTreeService } from './arboles-life-tree.service';

describe('ArbolesLifeTreeService', () => {
  let service: ArbolesLifeTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbolesLifeTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

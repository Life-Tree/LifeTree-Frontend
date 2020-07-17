import { TestBed } from '@angular/core/testing';

import { UserLifeTreeService } from './user-life-tree.service';

describe('UserLifeTreeService', () => {
  let service: UserLifeTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLifeTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

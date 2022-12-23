import { TestBed } from '@angular/core/testing';

import { ProducteditService } from './productedit.service';

describe('ProducteditService', () => {
  let service: ProducteditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteditService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});

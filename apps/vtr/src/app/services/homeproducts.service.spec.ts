import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeproductsService } from './homeproducts.service';

describe('HomeproductsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeproductsService],
    })
  );

  it('should be created', () => {
    const service: HomeproductsService = TestBed.get(HomeproductsService);
    expect(service).toBeTruthy();
  });
});

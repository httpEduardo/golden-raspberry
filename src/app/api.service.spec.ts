import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './services/api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch movies', () => {
    const mockMovies = [{ id: 1, year: 1980, title: "Test Movie", winner: true }];
    service.getMovies().subscribe((movies) => {
      expect(movies).toEqual(mockMovies);
    });
    const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies');
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });

  afterEach(() => {
    httpMock.verify();
  });
});

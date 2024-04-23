import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroesService } from './HeroesService';

describe('HeroesService', () => {
  let service: HeroesService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HeroesService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the get method with the correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getHeroes('test');
    expect(spy).toHaveBeenCalled();
  });
});

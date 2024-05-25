import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';


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

  it('should call the get method http with method get', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getHeroesByName('test');
    expect(spy).toHaveBeenCalled();
  });
  it('should list with parameter nameStartsWith', () => {
    service.getHeroesByName('test').subscribe(
      result => {
        expect(result).toBeTruthy();
      }
    );
  });

  it('should return participation By Hero', () => {
    service.getParticipationByHero('comics').subscribe(
      result => {
        expect(result).toBeTruthy();
      }
    );
  });
});

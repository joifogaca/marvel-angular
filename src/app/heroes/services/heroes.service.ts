import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of, take, tap } from 'rxjs';
import { Md5Service } from '../../shared/services/md5.service';
import { UuidService } from '../../shared/services/uuid.service';
import { ResponseModel } from '../request-model.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  private publicKey = '5cf8020eedb2156dff5af2258ef786de';

  private privateKey = 'b364d0ebc7afc465628dc51ce2f8eee81d577ca4';

  private hash!: string;


  constructor(private md5service: Md5Service,
    private uuidService: UuidService,
    private httpClient: HttpClient) {


  }


  public getHeroes(nameStartsWith: string): Observable<ResponseModel> {
    if (!nameStartsWith.trim()) {
      // if not search term, return empty hero array.
      return of();
    }

    let uuid = this.uuidService.genereteUuid();
    let hash = this.md5service.genereteHashMd5([uuid, this.privateKey, this.publicKey]);

    return this.httpClient.get<ResponseModel>(this.heroesUrl, {
      params: {
        ts: uuid,
        apikey: this.publicKey,
        hash: hash,
        nameStartsWith: nameStartsWith
      }
    }).pipe(
      tap(x => x.data.results ?
        console.log('fetched heroes') :
        console.log('not fetched log')),
        take(1)
      //catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}

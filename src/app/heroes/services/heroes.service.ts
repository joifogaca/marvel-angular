import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticationHelperService } from '../../shared/authentication-helper.service';
import { ResponseHero } from '../model/request.interface';
import { ResponseParticipation } from '../model/participation.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = environment.apiUrl + 'characters';

  constructor(
    private httpClient: HttpClient,
    private AuthenticationHelper: AuthenticationHelperService) {

  }


  public getHeroes(nameStartsWith: string): Observable<ResponseHero> {
    if (!nameStartsWith.trim()) {
      // if not search term, return empty hero array.
      return of();
    }

    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<ResponseHero>(this.heroesUrl, {
      params: {
        ts: dataHash.uuid,
        apikey: this.AuthenticationHelper.publicKey,
        hash: dataHash.hash,
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

  public getParticipationByHero(participation?: string, idHero?: string): Observable<ResponseParticipation> {

    if (!participation?.trim()) {
      // if not search term, return empty hero array.
      return of();
    }

    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<ResponseParticipation>(this.heroesUrl + '/' + idHero + '/' + participation, {
      params: {
        ts: dataHash.uuid,
        apikey: this.AuthenticationHelper.publicKey,
        hash: dataHash.hash,
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

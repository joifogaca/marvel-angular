import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, take, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticationHelperService } from '../../shared/authentication-helper.service';
import { ResponseHero } from '../model/request.interface';
import { ResponseParticipation } from '../model/participation.interface';
import { Character } from '../model/Character';
import { DataResult } from '../model/MarvelResponse';
import { MarvelResponse } from '../model/MarvelResponse';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = environment.apiUrl + 'characters';

  constructor(
    private httpClient: HttpClient,
    private AuthenticationHelper: AuthenticationHelperService) {

  }



  public getHeroesByName(nameStartsWith: string): Observable<DataResult> {
    if (!nameStartsWith.trim()) {
      // if not search term, return empty hero array.
      return of({} as DataResult);
    }

    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<MarvelResponse>(this.heroesUrl, {
      params: {
        ts: dataHash.uuid,
        apikey: this.AuthenticationHelper.publicKey,
        hash: dataHash.hash,
        nameStartsWith: nameStartsWith
      }
    }).pipe(
      map(response => response.data),
      delay(2000)
      //catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  public getParticipationByHero(participation?: string, idHero?: string) {

    if (!participation?.trim()) {
      // if not search term, return empty hero array.
      return of();
    }
    console.log(participation, idHero)
    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<ResponseParticipation>(this.heroesUrl + '/' + idHero + '/' + participation, {
      params: {
        ts: dataHash.uuid,
        apikey: this.AuthenticationHelper.publicKey,
        hash: dataHash.hash,
      }
    }).pipe(
      take(1),
      catchError(error =>{ console.log(error);
        return of({} as ResponseParticipation);}));
}
}

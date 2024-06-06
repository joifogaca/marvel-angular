import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, take } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthenticationHelperService } from '../../shared/authentication-helper.service';
import { DataResult, MarvelResponse } from '../model/MarvelResponse';
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

  public getHeroesByName(nameStartsWith: string): Observable<DataResult> {
    if (!nameStartsWith.trim()) {
      // if not search term, return empty hero array.
      return of({} as DataResult);
    }

    this.AuthenticationHelper.updateUuid();
    return this.httpClient.get<MarvelResponse>(this.heroesUrl, {
      params: {
        ts: this.AuthenticationHelper.getUuid(),
        apikey: this.AuthenticationHelper.getPublicKey(),
        hash: this.AuthenticationHelper.genereteHashMd5(),
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

    return this.httpClient.get<ResponseParticipation>(this.heroesUrl + '/' + idHero + '/' + participation, {
      params: {
        ts: this.AuthenticationHelper.getUuid(),
        apikey: this.AuthenticationHelper.getPublicKey(),
        hash: this.AuthenticationHelper.genereteHashMd5(),
      }
    }).pipe(
      take(1),
      catchError(error => {
        console.log(error);
        return of({} as ResponseParticipation);
      }));
  }
}

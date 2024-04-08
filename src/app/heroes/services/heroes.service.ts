import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { AuthenticationHelperService } from '../../shared/authentication-helper.service';
import { ResponseModel } from '../request-model.interface';
import { environment } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = environment.apiUrl + 'characters';

  private hash!: string;


  constructor(
    private httpClient: HttpClient,
    private AuthenticationHelper: AuthenticationHelperService) {

  }


  public getHeroes(nameStartsWith: string): Observable<ResponseModel> {
    if (!nameStartsWith.trim()) {
      // if not search term, return empty hero array.
      return of();
    }

    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<ResponseModel>(this.heroesUrl, {
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
}

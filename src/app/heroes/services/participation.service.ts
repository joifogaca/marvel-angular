import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { AuthenticationHelperService } from '../../shared/authentication-helper.service';
import { ResponseParticipation } from '../model/participation.interface';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(
    private httpClient: HttpClient,
    private AuthenticationHelper: AuthenticationHelperService) {

  }


  public getParticipation(url?: string): Observable<ResponseParticipation> {
    console.log(url);
    if (!url) {

      return of();
    }

    let dataHash = this.AuthenticationHelper.genereteHashMd5();
    return this.httpClient.get<ResponseParticipation>(url, {
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

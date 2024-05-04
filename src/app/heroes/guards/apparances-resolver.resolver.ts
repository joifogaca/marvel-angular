import type { ResolveFn } from '@angular/router';
import { Apparances } from '../model/Appearances';
import { of, Observable, catchError } from 'rxjs';
import { HeroesService } from '../services/heroes.service';
import { inject } from '@angular/core';
import { ResponseParticipation } from '../model/participation.interface';

export const apparancesResolverResolver: ResolveFn<Observable<ResponseParticipation>> = (route, state, service: HeroesService = inject(HeroesService)) => {
console.log('resolver')
  if(route.params && route.params['id']) {
    const participationName =route.url[0].path;

    return  service.getParticipationByHero(participationName,
      route.params['id']).pipe(catchError(() => of({} as ResponseParticipation)));
  }
  return of({} as ResponseParticipation);
};

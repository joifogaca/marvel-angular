import type { ResolveFn } from '@angular/router';
import { Apparances } from '../model/Appearances';
import { of } from 'rxjs';

export const apparancesResolverResolver: ResolveFn<Apparances[]> = (route, state) => {

  if(route.params && route.params['id']) {

  }
  return of([]);
};

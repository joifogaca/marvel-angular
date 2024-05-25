import { DataResult } from '../model/MarvelResponse';
import { Character } from './../model/Character';


export const heroMock: Character = {  id: '1',
name: 'hero',
description: 'hero',
thumbnail: { path: 'path',
  extension: 'extenxion' },
comics: {items: [],
  available: 0},
series: {items: [],
  available: 0}}


export const heroMock1: Character = {  id: '1',
name: 'hero1',
description: 'hero1',
thumbnail: { path: 'path1',
  extension: 'extenxion' },
comics: {items: [],
  available: 0},
series: {items: [],
  available: 0}}

  export const dataHeroesMock: DataResult = {
    offset: 1,
    limit: 10,
    total: 2,
    count: 2,
    results: [heroMock, heroMock1]
  }

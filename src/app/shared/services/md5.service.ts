import { Injectable } from '@angular/core';
import md5 from 'md5';

@Injectable({
  providedIn: 'root'
})
export class Md5Service {

  constructor() { }

  public genereteHashMd5(values: string[]): string {
    let concatenada = values.reduce(
      (acumulador, stringAtual) => acumulador + stringAtual);
    return md5(concatenada);
  }
}

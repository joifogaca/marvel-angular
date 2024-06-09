import { Injectable } from '@angular/core';
import { Character } from '../../heroes/model/Character';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly KEYBASE_ = 'marvel-api';

  constructor() { }

  getStoredCharacters(startWith: string): Character[] {
    return JSON.parse(localStorage.getItem(this.KEYBASE_ + startWith) ?? '[]') as Character[];
  }
  saveSearch(startWhith: string, characters: Character[]): void {
    const storedCharacters = this.getStoredCharacters(startWhith);

    if (!localStorage.getItem(this.KEYBASE_ + startWhith)) {
      localStorage.setItem(
        this.KEYBASE_ + startWhith,
        JSON.stringify(characters)
      );
    }
  }

}

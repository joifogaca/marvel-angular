import { Character } from './../../model/Character';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../model/request.interface';

@Component({
  selector: 'card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss'
})
export class CardHeroComponent {


  @Input() character?: Character;
  @Output() series = new EventEmitter();
  @Output() comics = new EventEmitter();

  onSeries(character?: Character) {
    this.series.emit(character);
  }

  onComics(character?: Character) {
    this.comics.emit(character);
  }

}

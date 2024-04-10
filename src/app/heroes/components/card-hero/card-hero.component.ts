import { Component, Input } from '@angular/core';
import { Hero } from '../../model/request.interface';

@Component({
  selector: 'card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss'
})
export class CardHeroComponent {

  @Input() hero?: Hero;

}

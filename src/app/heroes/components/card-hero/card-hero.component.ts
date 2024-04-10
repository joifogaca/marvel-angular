import { Component, Input } from '@angular/core';
import { Hero } from '../../model/request.interface';

@Component({
  selector: 'card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss'
})
export class CardHeroComponent {

  @Input() hero?: Hero;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(this.hero);
  }


}

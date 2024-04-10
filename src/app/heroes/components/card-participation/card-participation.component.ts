import { Component, Input } from '@angular/core';

import { Participation } from '../../model/participation.interface';

@Component({
  selector: 'card-participation',
  templateUrl: './card-participation.component.html',
  styleUrl: './card-participation.component.scss'
})
export class CardParticipationComponent {

  @Input() participation?: Participation;


  constructor() {

  }


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


import { Component, Input, OnInit } from '@angular/core';

import { Participation, ResponseParticipation } from '../../model/participation.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'card-session',
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent implements OnInit {

  @Input() title?: string;
  @Input() id?: string;
  participations?: Participation[];


  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.heroesService.getParticipationByHero(this.title, this.id).
      subscribe((value: ResponseParticipation) => this.participations = value.data.results)
  }

}

import { Component, Input } from '@angular/core';
import { Participations } from '../../model/request.interface';
import { ParticipationService } from '../../services/participation.service';
import { HeroesService } from '../../services/heroes.service';
import { Participation, ResponseParticipation } from '../../model/participation.interface';

@Component({
  selector: 'card-session',
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent {

  @Input() title?: string;
  @Input() id?: string;
  @Input() participations?: Participation[];

  constructor(private heroesService:HeroesService) {
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.heroesService.getParticipationByHero(this.title, this.id).
  subscribe((value: ResponseParticipation) => this.participations = value.data.results) 
}

}

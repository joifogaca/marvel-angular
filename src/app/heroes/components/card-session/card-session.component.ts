import { Component, Input } from '@angular/core';
import { Participations } from '../../model/request.interface';
import { ParticipationService } from '../../services/participation.service';

@Component({
  selector: 'card-session',
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent {

  @Input() title?: string;
  @Input() participations?: Participations;

  constructor() {
}

}

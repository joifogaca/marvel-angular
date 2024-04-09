import { Component, Input } from '@angular/core';
import { Participations } from '../../request-model.interface';

@Component({
  selector: 'card-session',
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent {

  @Input() title? :string;
  @Input() participations? :Participations;
}

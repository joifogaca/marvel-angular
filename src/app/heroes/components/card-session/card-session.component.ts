import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent {

  @Input() title? :string;
}

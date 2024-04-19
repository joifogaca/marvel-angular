import { Component, Input } from '@angular/core';
import { Thumbnail } from '../../model/request.interface';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() description?: string;
  @Input() thumbnail?: Thumbnail;
}
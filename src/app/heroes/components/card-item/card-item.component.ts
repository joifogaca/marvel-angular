import { Component, Input } from '@angular/core';
import { Thumbnail } from '../../model/Thumbnail';
import { Apparances } from '../../model/Appearances';
import { Item } from '../../model/Item';


@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() apparance?: Item;
}

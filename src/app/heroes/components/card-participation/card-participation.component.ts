import { Component, Input } from '@angular/core';
import { Participation, ResponseParticipation } from '../../model/participation.interface';
import { ParticipationService } from '../../services/participation.service';

@Component({
  selector: 'card-participation',
  templateUrl: './card-participation.component.html',
  styleUrl: './card-participation.component.scss'
})
export class CardParticipationComponent {

  @Input() url: string = '';
  participation!: Participation;

  constructor(private participationService: ParticipationService,
  ) {

  }

  ngOnInit(): void {
    this.participationService.getParticipation(this.url)
      .subscribe((value: ResponseParticipation) => {
        this.participation = value.data.results[0];
        console.log(this.participation);
        return this.participation;
      });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}


import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, first, map } from 'rxjs';
import { Participations } from '../../model/request.interface';
import { Participation } from '../../model/participation.interface';

@Component({
  selector: 'app-apparances',
  templateUrl: './apparances.component.html',
  styleUrl: './apparances.component.scss'
})
export class ApparancesComponent {

  participationName?: Observable<string | undefined>;
  result?: Participation[] | undefined;
  nomeCharacter?: string | undefined;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const responseParticipation  = this.route.snapshot.data['responseParticipation'];
this.result = responseParticipation.data.results;
this.nomeCharacter = this.route.snapshot.queryParams['nome'];
     this.participationName =  this.route.url.pipe(
       first(),
       map(url => url[0].path),
       first()
     );
  }

}

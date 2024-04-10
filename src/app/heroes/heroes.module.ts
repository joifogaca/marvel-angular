import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardSessionComponent } from './components/card-session/card-session.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    CardHeroComponent,
    SearchComponent,
    CardSessionComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    NgbAccordionModule,
    NgbProgressbarModule
  ],
  exports: [
    CardHeroComponent
  ]
})
export class HeroesModule { }

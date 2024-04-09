import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { CardSessionComponent } from './components/card-session/card-session.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItemComponent } from './components/card-item/card-item.component';



@NgModule({
  declarations: [
    CardHeroComponent,
    SearchComponent,
    CardSessionComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    NgbAccordionModule
  ],
  exports: [
    CardHeroComponent
  ]
})
export class HeroesModule { }

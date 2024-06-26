import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';


import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { ApparancesComponent } from './pages/apparances/apparances.component';




@NgModule({
  declarations: [
    CardHeroComponent,
    SearchComponent,
    CardItemComponent,
    ApparancesComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    NgOptimizedImage,
    SharedModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  exports: [
    CardHeroComponent
  ]
})
export class HeroesModule { }

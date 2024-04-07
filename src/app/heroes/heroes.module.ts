import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    CardHeroComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  exports: [
    CardHeroComponent
  ]
})
export class HeroesModule { }

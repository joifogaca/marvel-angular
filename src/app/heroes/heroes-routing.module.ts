import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ApparancesComponent } from './pages/apparances/apparances.component';
import { apparancesResolverResolver } from './guards/apparances-resolver.resolver';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'series/:id', component: ApparancesComponent},
  { path: 'comics/:id', component: ApparancesComponent, resolve: { responseParticipation: apparancesResolverResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

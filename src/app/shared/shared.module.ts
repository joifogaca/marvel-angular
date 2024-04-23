import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    NgbProgressbarModule,
  ],
  exports: [
    LoadingComponent,
    NgbAccordionModule
  ]
})
export class SharedModule { }

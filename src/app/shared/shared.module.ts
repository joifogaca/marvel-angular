import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    NgbProgressbarModule,
  ],
  exports: [
    LoadingComponent,
    NgbAccordionModule,
    ErrorMessageComponent
  ]
})
export class SharedModule { }

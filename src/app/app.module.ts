import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './heroes/components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

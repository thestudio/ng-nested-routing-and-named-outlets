import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsModule } from './modules/comics/comics.module';
import { MarvelModule } from './modules/marvel/marvel.module';
import { AvengersModule } from './modules/avengers/avengers.module';
import { HelpfulInfoModule } from './modules/helpful-info/helpful-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComicsModule,
    MarvelModule,
    AvengersModule,
    HelpfulInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

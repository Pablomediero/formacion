import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponentComponent } from './talk-component/talk-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

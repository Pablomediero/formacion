import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { TalkService } from './talk.service';
import {HttpClientModule} from "@angular/common/http";
import { NewTalkComponent } from './new-talk/new-talk.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent,
    NewTalkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }

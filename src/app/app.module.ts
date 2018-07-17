import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { VoteComponent } from './vote/vote.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VoteComponent,
    ListComponent,
    FormComponent,
    EventemitterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { VoteComponent } from './vote/vote.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VoteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

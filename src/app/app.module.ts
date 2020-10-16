import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrafficlogsComponent } from './trafficlogs/trafficlogs.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficlogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

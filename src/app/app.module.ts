import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';


import{AppRoutingModule} from './router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

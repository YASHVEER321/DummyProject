import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';

import{AppComponent2} from './app.component2'
import{AppComponent1} from './app.component1'

import { AppComponentHome } from './app.home';
import{AppRoutingModule} from './router';

@NgModule({
  declarations: [
    AppComponent,AppComponentHome,AppComponent1,AppComponent2
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

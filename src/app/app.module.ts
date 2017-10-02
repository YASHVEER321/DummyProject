import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';
//import{homeComponent} from './home/home.component'
import {AccordionModule,TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; import {CarService} from './service.component';

import{AppRoutingModule} from './router';

@NgModule({
  declarations: [
    AppComponent
  //  ,homeComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

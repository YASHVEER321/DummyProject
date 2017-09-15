
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule, CarouselModule, DialogModule, DataGridModule,TabViewModule } from 'primeng/primeng'
// import {  } from 'primeng/primeng';

import { homeComponent } from './home.component'
import { homeRoutingModule } from './home.routes'

@NgModule({
  declarations: [homeComponent],
  imports: [
    homeRoutingModule
  ],
  providers: [],
  //bootstrap:[homeComponent]
})

export class homeModule { }



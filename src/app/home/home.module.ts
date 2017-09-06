
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {DataGridModule} from 'primeng/primeng';
// import { AppComponent }  from './app.component';
// import{AppRoutingModule} from './router';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     DataGridModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DataGridModule} from 'primeng/primeng'

import {homeComponent} from './home.component'
//import {homeRoutingModule} from   './home.routes'

@NgModule({
  declarations:[homeComponent],
  imports:[
BrowesrModule,DataGridModule
//,homeRoutingModule
  ],
  providers:[],
  //bootstrap:[homeComponent]
})

export class homeModule{}



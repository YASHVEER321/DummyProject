
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule, CarouselModule, DialogModule, DataGridModule,TabViewModule } from 'primeng/primeng'
import { CommonModule } from '@angular/common';  

import { homeComponent } from './home.component'
import { headerComponent } from './header/header.component'
import { footerComponent } from './footer/footer.component'
import { homeRoutingModule } from './home.routes'
import { navComponent } from './navbaar/nav.component'
import { newsComponent } from './news/news.component'
import { aboutComponent } from './about/about.component'
import { nestedComponent } from './nested/nested.component'
import { dataGridComponent } from './dataGrid/dataGrid.component'
import {PanelModule,GrowlModule, SharedModule,SplitButtonModule} from 'primeng/primeng';



// import {CarService} from './dataGrid/service.component';

// import {Header} from 'primeng/primeng';
// import {Footer} from 'primeng/primeng';
@NgModule({
  declarations: [homeComponent,headerComponent,footerComponent,navComponent,
  aboutComponent,newsComponent,nestedComponent,dataGridComponent,

  ],
  imports: [
    homeRoutingModule,DataGridModule,TabViewModule,
    ButtonModule,DialogModule,CommonModule,PanelModule,
    GrowlModule,SplitButtonModule,
     SharedModule
  

  ],
  providers: [],
  //bootstrap:[homeComponent]
})

export class homeModule { }



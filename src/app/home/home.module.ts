
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule, CarouselModule, DialogModule, DataGridModule,TabViewModule } from 'primeng/primeng'
//import { MenubarModule,MenuItem } from 'primeng/primeng';

import { homeComponent } from './home.component'
import { headerComponent } from './header/header.component'
import { footerComponent } from './footer/footer.component'
import { homeRoutingModule } from './home.routes'
import { navComponent } from './navbaar/nav.component'
import { newsComponent } from './news/news.component'
import { aboutComponent } from './about/about.component'
import { nestedComponent } from './nested/nested.component'
import { dataGridComponent } from './dataGrid/dataGrid.component'
import { DataTableModule ,InputTextModule} from 'primeng/primeng';



@NgModule({
  declarations: [homeComponent,headerComponent,footerComponent,navComponent,
  aboutComponent,newsComponent,nestedComponent,dataGridComponent
  
  ],
  imports: [
    homeRoutingModule,DataTableModule,DataGridModule,
    InputTextModule,DataTableModule,ButtonModule,DialogModule
  ],
  providers: [],
  //bootstrap:[homeComponent]
})

export class homeModule { }



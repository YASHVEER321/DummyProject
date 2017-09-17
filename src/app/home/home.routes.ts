
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { homeComponent } from './home.component'
import { headerComponent } from './header/header.component'
import { footerComponent } from './footer/footer.component'
import { newsComponent } from './news/news.component'
import { aboutComponent } from './about/about.component'
//import { navComponent } from './footer/footer.component'

const homeRoutes: Routes =
    [
        {
            path: "", component: homeComponent,
            
        },
        {
           path: "header", component: headerComponent,
             children: [
                 {
         //           path: 'header', component: headerComponent,
                     path: 'footer', component: footerComponent
                 }
             ]
        },
        {
            path: "news", component: newsComponent,
            
        },
        {
            path: "about", component: aboutComponent,
            
        },
    ];

  //export const homeRoutingModule:ModuleWithProviders=RouterModule.forRoot(homeRoutes);

export const homeRoutingModule: ModuleWithProviders = RouterModule.forChild(homeRoutes)
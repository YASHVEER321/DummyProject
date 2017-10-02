
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { homeComponent } from './home.component'
import { headerComponent } from './header/header.component'
import { footerComponent } from './footer/footer.component'
import { nestedComponent } from './nested/nested.component'
import { newsComponent } from './news/news.component'
import { aboutComponent } from './about/about.component'
import { dataGridComponent } from './dataGrid/dataGrid.component'

const homeRoutes: Routes =
    [
        {
            path: "", component: homeComponent,
            children: [
                {
                    path: "news", component: newsComponent,
                    children: [
                        { path: 'nested', component: nestedComponent }
                    ]
                },
                {
                    path: "about", component: aboutComponent,
                    children: [
                        { path: 'nested', component: nestedComponent }

                    ]
                },

           {path: "datagrid", component: dataGridComponent}
            ]

        },
        {
         //     children: [
         //         {
         // //           path: 'header', component: headerComponent,
         //             path: 'footer', component: footerComponent
         //         }
         //     ]
        }

    ];

//export const homeRoutingModule:ModuleWithProviders=RouterModule.forRoot(homeRoutes);

export const homeRoutingModule: ModuleWithProviders = RouterModule.forChild(homeRoutes)
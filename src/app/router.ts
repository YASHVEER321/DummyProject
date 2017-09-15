import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

import{AppComponent} from './app.component'
//import{homeComponent} from './home/home.component'
// const initialRoute = () => {
//   return true;
// };
const appRoutes:Routes=[
 {
    path: '', loadChildren: './home/home.module#homeModule'
  }, 
//{path:'compo1',component:AppComponent1},
//{path:'',component:homeComponent}
 //{path:'',component:homeComponent},
//{path:'app',component:AppComponent}
];

export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);
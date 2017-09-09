

// import {ModuleWithProviders} from '@angular/core'
// import {Routes,RouterModule} from '@angular/router'

// import{AppComponent} from './app.component'
// //
// const appRoutes:Routes=[
// //{path:'compo1',component:AppComponent1},
// //{path:'',component:AppComponent2},
// {path:'',component:AppComponent}
// ];

// export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);




import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

import {homeComponent} from './home.component'

const homeRoutes:Routes=
[
{path:"home", component:homeComponent}
];

 export const homeRoutingModule:ModuleWithProviders=RouterModule.forRoot(homeRoutes);
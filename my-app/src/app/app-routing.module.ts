import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home/home/home.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { LaptopComponent } from './laptop/laptop/laptop.component';
import { TabletComponent } from './tablet/tablet/tablet.component';

const routes:Routes = [
  {
    path:'home', 
    component:HomeComponent
 },
 {
  path:'iphone', 
  component:IphoneComponent
},
{
  path:'laptop', 
  component:LaptopComponent
},
{
  path:'tablet', 
  component:TabletComponent
},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

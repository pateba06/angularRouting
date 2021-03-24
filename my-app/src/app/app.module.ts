import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { LaptopComponent } from './laptop/laptop/laptop.component';
import { TabletComponent } from './tablet/tablet/tablet.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IphoneComponent,
    LaptopComponent,
    TabletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionComponent } from './section/section.component';
import { Section2Component } from './section2/section2.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SectionComponent,
    HomeComponent,
    FooterComponent,
    Section2Component,
    RegisterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

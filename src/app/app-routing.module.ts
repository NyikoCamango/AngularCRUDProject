import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionComponent } from './section/section.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'Category', component: Section2Component},
  {path: 'Product',component:SectionComponent},
  {path: 'Home',component:HomeComponent },
  {path:'RegisterForm',component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

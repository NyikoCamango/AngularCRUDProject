import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: 'category', component: Section2Component},
  {path: 'Product',component:SectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

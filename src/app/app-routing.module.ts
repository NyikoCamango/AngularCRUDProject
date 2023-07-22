import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'section2', component: Section2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

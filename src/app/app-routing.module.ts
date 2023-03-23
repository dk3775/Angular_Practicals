import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P11Component } from './p11/p11.component';
import { P12Component } from './p12/p12.component';

const routes: Routes = [
  {path:'Prac11', component: P11Component},
  {path:'Prac12', component: P12Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

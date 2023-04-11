import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P11Component } from './p11/p11.component';
import { P12Component } from './p12/p12.component';
import { P13MainComponent } from './p13-main/p13-main.component';
import { P15Component } from './p15/p15.component';
import { P16Component } from './p16/p16.component';

const routes: Routes = [
  { path: 'Prac11', component: P11Component },
  { path: 'Prac12', component: P12Component },
  { path: 'Prac13', component: P13MainComponent },
  { path: 'Prac15', component: P15Component },
  { path: 'Prac16', component: P16Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P11Component } from './p11/p11.component';
import { P12Component } from './p12/p12.component';
import { P13MainComponent } from './p13-main/p13-main.component';
import { P15Component } from './p15/p15.component';
import { P16Component } from './p16/p16.component';

@NgModule({
  declarations: [
    AppComponent,
    P11Component,
    P12Component,
    P13MainComponent,
    P15Component,
    P16Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

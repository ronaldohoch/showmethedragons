import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Auth } from './guard/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { DetailComponent } from './pages/dragons/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

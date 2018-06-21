import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Auth } from './guard/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { ListComponent } from './pages/dragons/list/list.component';
import { DetailComponent } from './pages/dragons/detail/detail.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NewComponent } from './pages/dragons/new/new.component';

import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DragonsComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    Auth,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

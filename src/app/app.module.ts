import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Auth } from './guard/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { ListComponent } from './pages/dragons/list/list.component';
import { DetailComponent } from './pages/dragons/detail/detail.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { LoginService } from './services/login.service';
import { ListDragonsService } from './services/list-dragons.service';
import { ListDragonsResolveService } from './services/list-dragons-resolve.service';
import { TableComponent } from './pages/dragons/list/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DragonsComponent,
    DetailComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Auth,
    ListDragonsService,
    ListDragonsResolveService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

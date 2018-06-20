import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { ListComponent } from './pages/dragons/list/list.component';
import { DetailComponent } from './pages/dragons/detail/detail.component';
import { NewComponent } from './pages/dragons/new/new.component';
import { Auth } from './guard/auth';

const routes: Routes = [
  {path: '', redirectTo: 'dragons',pathMatch: 'full'},
  {path: 'login', component:LoginComponent},

  {path: 'dragons',component:DragonsComponent, canActivate:[Auth]},
  {path: 'dragons/list',component:ListComponent, canActivate:[Auth]},
  {path: 'dragons/detail',component:DetailComponent, canActivate:[Auth]},
  {path: 'dragons/new',component:NewComponent, canActivate:[Auth]},
  
  {path: '**', redirectTo: 'dragons',pathMatch: 'full'}
  // {path: 'home',component: HomeComponent}
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

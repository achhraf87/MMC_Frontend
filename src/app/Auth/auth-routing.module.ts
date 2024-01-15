import { NgModule } from '@angular/core';
import {LoginComponent} from '../Auth/login/login.component'
import {RegisterComponent} from '../Auth/register/register.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

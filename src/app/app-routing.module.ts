import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from '../app/Auth/login/login.component';
import { RegisterComponent } from '../app/Auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'speakers',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/Auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      // {
      //   path: 'users',
      //   //canActivate: [AuthGuard],
      //   loadChildren: () =>
      //     import('./users-management/users-management.module').then(
      //       (m) => m.UsersManagementModule
      //     ),
      // },
      // {
      //   path: 'articles',
      //   //canActivate: [AuthGuard],
      //   loadChildren: () =>
      //     import('./articles-management/articles-management.module').then(
      //       (m) => m.ArticlesManagementModule
      //     ),
      // },
      // {
      //   path: 'demandes',
      //   //canActivate: [AuthGuard],
      //   loadChildren: () =>
      //      import('').then(
      //       (m) => m.DemandesManagementModule
      //     ),
      // },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register',
    },
  },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}


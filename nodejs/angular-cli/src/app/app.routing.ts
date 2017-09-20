import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'}
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

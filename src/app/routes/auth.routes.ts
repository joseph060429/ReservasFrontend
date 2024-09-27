import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';

export const AUTH_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

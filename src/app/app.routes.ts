import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'reservation', component: ReservationComponent},
  {path:'forgot-password',component: ForgotPasswordComponent},
];

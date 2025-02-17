import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HirdetesekComponent } from './components/hirdetesek/hirdetesek.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserAuthGuard } from './guards/user-auth.guard';

export const routes: Routes = [
    {
        path:'', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'hirdetesek', component: HirdetesekComponent
    },
    {
        path: 'logout', component: LogoutComponent, canActivate: [UserAuthGuard]
    },
];

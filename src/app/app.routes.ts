import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: '**', redirectTo: 'home', pathMatch: 'full'}
];

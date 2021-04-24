import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './modules/users/users.component';
import {UserDetailsComponent} from './modules/user-details/user-details.component';
import {RegisterComponent} from './modules/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {path: 'users', component: UsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users-detais', component: UserDetailsComponent},
  {path: '**', redirectTo: '/users'}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}

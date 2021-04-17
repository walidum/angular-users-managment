import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './modules/users/users.component';
import {UserDetailsComponent} from './modules/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {path: 'users', component: UsersComponent},
  {path: 'users-detais', component: UserDetailsComponent},
  {path: '**', redirectTo: '/index'}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}

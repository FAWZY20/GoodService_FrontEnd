import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

const routes: Routes = [
  {path: 'home', component: OpenStreetMapComponent },
  {path: '', component: OpenStreetMapComponent },
  {path: 'signup-user', component: SignupUserComponent},
  {path: 'connexion', component:ConnectionComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


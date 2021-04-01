import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connexion/connection.component';
import { ConnexionProfessionalComponent } from './connexion-professional/connexion-professional.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { SignupProfessionalComponent } from './signup-professional/signup-professional.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { BackUserComponent } from './back-user/back-user.component';

const routes: Routes = [
  {path: 'home', component: OpenStreetMapComponent },
  {path: '', component: OpenStreetMapComponent },
  {path: 'signup-user', component: SignupUserComponent},
  {path: 'connexion', component:ConnectionComponent},
  {path: 'backuser', component:BackUserComponent},
  {path: 'signup-professional', component:SignupProfessionalComponent},
  {path: 'connexion-professional', component: ConnexionProfessionalComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


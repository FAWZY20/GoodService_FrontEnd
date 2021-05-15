import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderVerticalComponent } from './header-vertical/header-vertical.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ConnectionComponent } from './connexion/connection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { HeaderHorizontalComponent } from './header-horizontal/header-horizontal.component';
import { SignupProfessionalComponent } from './signup-professional/signup-professional.component';
import { ConnexionProfessionalComponent } from './connexion-professional/connexion-professional.component';
import { FormsModule } from '@angular/forms';
import { BackUserComponent } from './back-user/back-user.component';
import { HeaderHorizontalUserComponent } from './header-horizontal-user/header-horizontal-user.component';
import { ProfessionalDashboardHomeComponent } from './professional-dashboard-home/professional-dashboard-home.component';
import { HeaderHorizontalProfessionalComponent } from './header-horizontal-professional/header-horizontal-professional.component';
import { ProfileReglageProfessionalComponent } from './profile-reglage-professional/profile-reglage-professional.component';
import { FooterComponent } from './footer/footer.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { HistoriquePaymentUserComponent } from './historique-payment-user/historique-payment-user.component';
import { MoyenPaimenetUserComponent } from './moyen-paimenet-user/moyen-paimenet-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { HomePAgeComponent } from './home-page/home-page.component';
import { HeaderVisiteurComponent } from './header-visiteur/header-visiteur.component';
import { AjoutCarteCreditComponent } from './ajout-carte-credit/ajout-carte-credit.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { ProfessionalHoraireOuvertureComponent } from './professional-horaire-ouverture/professional-horaire-ouverture.component';
import { AbscenceProfessionalComponent } from './abscence-professional/abscence-professional.component';
import { NouvelleAbsComponent } from './nouvelle-abs/nouvelle-abs.component';
import { RendezVousCoiffureMenComponent } from './rendez-vous-coiffure-men/rendez-vous-coiffure-men.component';
import { CoupeFemmeComponent } from './coupe-femme/coupe-femme.component';
import { BrushingComponent } from './brushing/brushing.component';
import { ColorationComponent } from './coloration/coloration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderVerticalComponent,
    SignupUserComponent,
    ConnectionComponent,
    OpenStreetMapComponent,
    HeaderHorizontalComponent,
    SignupProfessionalComponent,
    ConnexionProfessionalComponent,
    BackUserComponent,
    HeaderHorizontalUserComponent,
    ProfessionalDashboardHomeComponent,
    HeaderHorizontalProfessionalComponent,
    ProfileReglageProfessionalComponent,
    FooterComponent,
    UserReservationsComponent,
    HistoriquePaymentUserComponent,
    MoyenPaimenetUserComponent,
    ProfilUserComponent,
    HomePAgeComponent,
    HeaderVisiteurComponent,
    AjoutCarteCreditComponent,
    HeaderUserComponent,
    ProfessionalHoraireOuvertureComponent,
    AbscenceProfessionalComponent,
    NouvelleAbsComponent,
    RendezVousCoiffureMenComponent,
    CoupeFemmeComponent,
    BrushingComponent,
    ColorationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connexion/connection.component';
import { ConnexionProfessionalComponent } from './connexion-professional/connexion-professional.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { SignupProfessionalComponent } from './signup-professional/signup-professional.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { BackUserComponent } from './back-user/back-user.component';
import { ProfessionalDashboardHomeComponent } from './professional-dashboard-home/professional-dashboard-home.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { HistoriquePaymentUserComponent } from './historique-payment-user/historique-payment-user.component';
import { MoyenPaimenetUserComponent } from './moyen-paimenet-user/moyen-paimenet-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { HomePAgeComponent } from './home-page/home-page.component';
import { AjoutCarteCreditComponent } from './ajout-carte-credit/ajout-carte-credit.component';
import { ProfessionalHoraireOuvertureComponent } from './professional-horaire-ouverture/professional-horaire-ouverture.component';
import { AbscenceProfessionalComponent } from './abscence-professional/abscence-professional.component';
import { NouvelleAbsComponent } from './nouvelle-abs/nouvelle-abs.component';
import { RendezVousCoiffureMenComponent } from './rendez-vous-coiffure-men/rendez-vous-coiffure-men.component';
import { CoupeFemmeComponent } from './coupe-femme/coupe-femme.component';
import { BrushingComponent } from './brushing/brushing.component';
import { ColorationComponent } from './coloration/coloration.component';
import { ManucureComponent } from './manucure/manucure.component';
import { EpilationComponent } from './epilation/epilation.component';
import { SoinHydratanComponent } from './soin-hydratan/soin-hydratan.component';
import { RepasageComponent } from './repasage/repasage.component';
import { MenageComponent } from './menage/menage.component';
import { FormulaireReservationCoupeHommeComponent } from './formulaire-reservation-coupe-homme/formulaire-reservation-coupe-homme.component';
import { ProfesionalRendezVousComponent } from './profesional-rendez-vous/profesional-rendez-vous.component';
import { YogaComponent } from './yoga/yoga.component';
import { AbdoComponent } from './abdo/abdo.component';
import { CardioComponent } from './cardio/cardio.component';

const routes: Routes = [
  {path: 'utilisateur/tableau-de-bord', component: BackUserComponent},
  {path: 'professionel/list/rdv', component: ProfesionalRendezVousComponent},
  {path: 'reservation/coupe/homme', component: FormulaireReservationCoupeHommeComponent},
  {path: 'repasage', component: RepasageComponent},
  {path: 'menage', component: MenageComponent},
  {path: 'coupe-homme', component: RendezVousCoiffureMenComponent},
  {path: 'brushing', component: BrushingComponent},
  {path: 'manucure', component: ManucureComponent},
  {path: 'epilation', component: EpilationComponent},
  {path: 'soin-hydratant', component: SoinHydratanComponent},
  {path: 'coloration', component: ColorationComponent},
  {path: 'coupe-femme', component: CoupeFemmeComponent},
  {path: 'NouvelleAbscence', component: NouvelleAbsComponent},
  {path: 'Abscence', component: AbscenceProfessionalComponent},
  {path: 'Horaire-ouverture', component: ProfessionalHoraireOuvertureComponent}, 
  {path: 'nouvelleCarteCredit', component: AjoutCarteCreditComponent},
  {path: 'mon-compte', component: ProfilUserComponent},
  {path: 'MoyenDePaiment', component: MoyenPaimenetUserComponent},
  {path: 'reservation/list', component: UserReservationsComponent},
  {path: 'HistoriquePaymentUser', component: HistoriquePaymentUserComponent},
  {path: 'DashboardProfesionnal', component: ProfessionalDashboardHomeComponent},
  {path: 'Map', component: OpenStreetMapComponent },
  {path: '', component: HomePAgeComponent },
  {path: 'signup-user', component: SignupUserComponent},
  {path: 'connexion', component:ConnectionComponent},
  {path: 'backuser', component:BackUserComponent},
  {path: 'signup-professional', component:SignupProfessionalComponent},
  {path: 'connexion-professional', component: ConnexionProfessionalComponent},
  {path: 'professional/list', component: ProfesionalRendezVousComponent},
  {path: 'yoga', component: YogaComponent},
  {path: 'abdo', component: AbdoComponent},
  {path: 'cardio', component: CardioComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


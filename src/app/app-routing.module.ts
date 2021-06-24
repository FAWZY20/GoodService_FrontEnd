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
import { ProfileReglageprofessionalComponent } from './profile-reglage-professional/profile-reglage-professional.component';
import { HistoriqueProfessionelComponent } from './historique-professionel/historique-professionel.component';
import { AddHoraireComponent } from './add-horaire/add-horaire.component';
import { PrixPrestationComponent } from './prix-prestation/prix-prestation.component';
import { FormPrixPrestationComponent } from './form-prix-prestation/form-prix-prestation.component';

const routes: Routes = [

  { path: '', component: HomePAgeComponent },

  { path: 'signup-user', component: SignupUserComponent },
  { path: 'connexion', component: ConnectionComponent },

  {
    path: 'client',
    children:
      [
        { path: ':id/Dashboard', component: BackUserComponent },
        { path: ':id/profile', component: ProfilUserComponent },
        { path: ':id/MoyenDePaiment', component: MoyenPaimenetUserComponent },
        { path: ':id/Historique', component: HistoriquePaymentUserComponent },
        { path: ':id/CarteCredit', component: AjoutCarteCreditComponent },
        { path: ':id/reservation', component: UserReservationsComponent }
      ],
  },


  { path: 'signup-professional', component: SignupProfessionalComponent },
  { path: 'connexion-professional', component: ConnexionProfessionalComponent },

  {
    path: 'professionel',
    children:
      [
        { path: ':id/Dashboard', component: ProfessionalDashboardHomeComponent },
        { path: ':id/rendezvous', component: ProfesionalRendezVousComponent },
        { path: ':id/Abscence', component: AbscenceProfessionalComponent },
        { path: ':id/NouvelleAbscence', component: NouvelleAbsComponent },
        { path: ':id/Horaire', component: ProfessionalHoraireOuvertureComponent },
        { path: ':id/addHoraire', component: AddHoraireComponent },
        { path: ':id/profil', component: ProfileReglageprofessionalComponent },
        { path: ':id/historique', component: HistoriqueProfessionelComponent },
        { path: ':id/prestation', component: PrixPrestationComponent },
        { path: ':id/addPrestation', component: FormPrixPrestationComponent }
      ],
  },


  {
    path: 'prestation',
    children:
      [
        { path: 'repasage', component: RepasageComponent },
        { path: 'menage', component: MenageComponent },
        { path: 'coupe/homme', component: RendezVousCoiffureMenComponent },
        { path: 'brushing', component: BrushingComponent },
        { path: 'manucure', component: ManucureComponent },
        { path: 'epilation', component: EpilationComponent },
        { path: 'soin-hydratant', component: SoinHydratanComponent },
        { path: 'coloration', component: ColorationComponent },
        { path: 'coupe/femme', component: CoupeFemmeComponent },

      ],
  },

  {
    path: 'reservation',
    children:
      [
        { path: 'coupe/homme', component: FormulaireReservationCoupeHommeComponent },
      ],
  },

  { path: 'reservation/coupe/homme', component: FormulaireReservationCoupeHommeComponent },

  { path: '**', redirectTo: 'not-found' }

];
.0
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


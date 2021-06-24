import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './api/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connexion } from './api/UserConnexion';
import { Professional } from './api/professional';
import { environment } from 'src/environments/environment';
import { Reservation } from './api/reservationDTO';
import { horaire } from './professional-horaire-ouverture/professional-horaire-ouverture.component';
import { Absence } from './api/absence';
import { ConnectionComponent } from './connexion/connection.component';
import { ConnexionProfessionalComponent } from './connexion-professional/connexion-professional.component';
import { Prix } from './api/Prix';

@Injectable({
  providedIn: 'root'
})
export class RegistationService {

  currentProfessional: Professional;
  currentUser: User;

  constructor(private _http: HttpClient,
    private authentificationPro: ConnexionProfessionalComponent, 
    private authentificationUser: ConnectionComponent
    ) {
      this.currentProfessional = this.authentificationPro.currentProfessionalValue; 
      this.currentUser = this.authentificationUser.currentUserValue; 
     }

//User

  public loginUserFromRemote(user: connexion): Observable<any> {
    return this._http.post<any>( environment.apiUrl + '/connexion/utilisateur', user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/inscription/utilisateur', user)
  }

  public registerAppointment(appointement :Reservation):Observable<any>{
    return this._http.post<any>(environment.apiUrl +'/new', appointement)
  }


//Professional

  public loginProfessionalFromRemote(professional: Professional): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/connexionProfessional', professional)
  }

  public registerProfessionalFromRemote(professional :Professional):Observable<any>{
    return this._http.post<any>(environment.apiUrl +'/registerProfessional', professional)
  }

  public addHoraire(horaire: horaire): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/new/horaire/' + this.currentProfessional.id, horaire)
  }

  public addAbscence(abscence: Absence): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/new/absence/' + this.currentProfessional.id, abscence)
  }


  public addPrice(prix: Prix): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/new/price/' + this.currentProfessional.id, prix)
  }




}

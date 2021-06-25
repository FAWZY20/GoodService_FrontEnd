import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../api/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connexion } from '../api/UserConnexion';
import { Professional } from '../api/professional';
import { environment } from 'src/environments/environment';
import { Reservation } from '../api/reservationDTO';
import { ReservationDTO } from '../user-reservations/user-reservations.component';
import { horaire } from '../professional-horaire-ouverture/professional-horaire-ouverture.component';

@Injectable({
  providedIn: 'root'
})
export class RegistationService {

  constructor(private _http: HttpClient) { }


  //Url user 

  public loginUserFromRemote(user: connexion): Observable<any> {
    return this._http.post<any>( environment.apiUrl + '/connexion/utilisateur', user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/inscription/utilisateur', user)
  }

  public registerAppointment(appointement :Reservation):Observable<any>{
    return this._http.post<any>(environment.apiUrl +'/new', appointement)
  }


//Url profesional

  public loginProfessionalFromRemote(professional: Professional): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/connexionProfessional', professional)
  }

  public registerProfessionalFromRemote(professional :Professional):Observable<any>{
    return this._http.post<any>(environment.apiUrl +'/registerProfessional', professional)
  }

  public getProfessional():Observable<any>{
    return this._http.get<Professional[]>(environment.apiUrl +'/professional/list')
  }

  public addHoraire(horaire: horaire): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/new/horaire', horaire)
  }

}

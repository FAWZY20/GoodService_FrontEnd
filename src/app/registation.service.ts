import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserDTO } from './api/userDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnexionDTO } from './api/userConnexionDTO';
import { ProfessionalDTO } from './api/professionalDTO';
import { environment } from 'src/environments/environment';
import { ReservationDTO } from './user-reservations/user-reservations.component';

@Injectable({
  providedIn: 'root'
})
export class RegistationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: ConnexionDTO): Observable<any> {
    return this._http.post<any>( environment.apiUrl + '/api/user/login', user)
  }

  public registerUserFromRemote(user: UserDTO): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/registerUser', user)
  }

  public loginProfessionalFromRemote(user: ProfessionalDTO): Observable<any> {
    return this._http.post<any>(environment.apiUrl + '/connexionProfessional', user)
  }

  public registerProfessionalFromRemote(user :ProfessionalDTO):Observable<any>{
    return this._http.post<any>(environment.apiUrl +'/registerProfessional', user)
  }

  public createReservation(reservation: ReservationDTO): Observable<ReservationDTO>{
    return this._http.post<ReservationDTO>(environment.apiUrl+'/api/reservation/new', reservation)
  }
}

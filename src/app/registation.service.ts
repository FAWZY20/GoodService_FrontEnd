import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connexion } from './UserConnexion';
import { Professional } from './professional';

@Injectable({
  providedIn: 'root'
})
export class RegistationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: connexion): Observable<any> {
    return this._http.post<any>("http://localhost:8080/connexionUser", user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/registerUser", user)
  }

  public loginProfessionalFromRemote(user: Professional): Observable<any> {
    return this._http.post<any>("http://localhost:8080/connexionProfessional", user)
  }

  public registerProfessionalFromRemote(user :Professional):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerProfessional", user)
  }
}

import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connexion } from './UserConnexion';

@Injectable({
  providedIn: 'root'
}) 
export class RegistationService {

  constructor( private  _http : HttpClient) { }

  public loginUserFromRemote(user :connexion):Observable<any>{
    const options = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    }
      return this._http.post<any>("http://localhost:8080/connexionUser", user, options)
  }
}

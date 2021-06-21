import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../api/user';
import { RegistationService } from './registation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user = new User();

  constructor(private _service: RegistationService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User) {
    this._service.loginUserFromRemote(user).subscribe(
      data => {
        if(this.user){
          localStorage.setItem('currentUserr', JSON.stringify(this.user));
          this.currentUserSubject.next(this.user);
        }
        return this.user;
      });
    }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
//   this.currentUserSubject.next(null) ;
  }
}

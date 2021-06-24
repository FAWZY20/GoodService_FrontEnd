import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../api/user';
import { connexion } from '../api/UserConnexion';
import { RegistationService } from '../_services/registation.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user = new connexion();
  msg = '';

  constructor(private _service: RegistationService, private _router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  loginUser() {
    console.log(this.user);
    this._service.loginUserFromRemote(this.user).subscribe(
      user => {
        console.log("response recieved");
        this._router.navigate(['client/' + this.currentUserValue.id +'/Dashboard/']);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credentials, please enter valid email and password";
      }
    )
  }

}

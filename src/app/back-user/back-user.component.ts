import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { RegistationService } from '../registation.service';

export interface User {
  id: number;
  nom: string;
  prenom: string;
}


@Component({
  selector: 'app-back-user',
  templateUrl: './back-user.component.html',
  styleUrls: ['./back-user.component.css']
})
export class BackUserComponent implements OnInit {

  currentUser: User;
  users = [];

  constructor(
    private _service : RegistationService,
    private authenticationService: AuthentificationService) {
      
 //   this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this._service.getAll()
        .pipe(first());
        //.subscribe(users => this. = users);
}

}

function first(): import("rxjs").OperatorFunction<import("../api/user").User[], unknown> {
  throw new Error('Function not implemented.');
}


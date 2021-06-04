import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistationService } from '../registation.service';
import {User} from '../api/user';
import { connexion } from '../api/UserConnexion';

@Component({
  selector: 'app-connection',
  templateUrl:'./connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  
 user = new connexion();
 msg= '';

  constructor(private _service : RegistationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.user);
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/utilisateur/tableau-de-bord'])
        },
      error =>{ 
        console.log("exception occured");
        this.msg = "Bad credentials, please enter valid email and password";
      }
    )
  }

}

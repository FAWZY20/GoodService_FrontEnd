import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Professional } from '../api/professional';
import { RegistationService } from '../registation.service';

@Component({
  selector: 'app-connexion-professional',
  templateUrl: './connexion-professional.component.html',
  styleUrls: ['./connexion-professional.component.css']
})
export class ConnexionProfessionalComponent implements OnInit {

  user = new Professional();
  msg = '';

  constructor(private _service: RegistationService, private _router:  Router) { }

  ngOnInit(): void {}

  loginProfessional(){
    console.log(this.user);
    this._service.loginProfessionalFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/DashboardProfesionnal'])
      },
      error => {
        console.log("exception occured");
        this.msg = "exception occured";
      }
    )
  }

}

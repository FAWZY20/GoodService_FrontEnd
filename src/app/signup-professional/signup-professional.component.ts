import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Professional } from '../api/professional';
import { RegistationService } from '../_services/registation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-professional',
  templateUrl: './signup-professional.component.html',
  styleUrls: ['./signup-professional.component.css']
})
export class SignupProfessionalComponent implements OnInit {

  professional = new Professional();
  msg="";

  constructor(private _service : RegistationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerProfessional(){
    this._service.registerProfessionalFromRemote(this.professional).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/connexion-professional'])
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;
        
      }
    ) 
  }

}

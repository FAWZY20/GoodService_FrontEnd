import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import { RegistationService } from '../registation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {


  user =new User();
  msg=''; 

  constructor(private _service : RegistationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/connexion'])
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;
        
      }
    ) 
  }

}

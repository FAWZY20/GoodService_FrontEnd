import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import {NgForm} from '@angular/forms';

export interface UserLightDTO{
  id:number;
  nom:string;
  prenom:string;
  numero:number;
  email:string;
  adresse:string;
  code_postal:string;
  ville:string;
}

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit(): void {
  }

}

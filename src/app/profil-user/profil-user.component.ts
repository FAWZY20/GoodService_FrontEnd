import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../api/userDTO';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  user: UserDTO = {};

  constructor() { }

  ngOnInit(): void {
  }

}

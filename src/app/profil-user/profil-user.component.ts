import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import {NgForm} from '@angular/forms';

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

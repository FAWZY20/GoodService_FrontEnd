import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  user = new User();

  constructor(private router: Router,
    private authentificationUser: ConnectionComponent,
    private route: ActivatedRoute) { 
      this.currentUser = this.authentificationUser.currentUserValue;
    }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(user => {
      console.log(user) //log the entire params object
      console.log(user['id']) //log the value of id
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../api/user';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-back-user',
  templateUrl: './back-user.component.html',
  styleUrls: ['./back-user.component.css']
})
export class BackUserComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  users = [];

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

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/connexion-professional']);
  }

}

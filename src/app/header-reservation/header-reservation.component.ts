import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../api/user';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-header-reservation',
  templateUrl: './header-reservation.component.html',
  styleUrls: ['./header-reservation.component.css']
})
export class HeaderReservationComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  users = [];

  constructor(private router: Router,
    private authentificationUser: ConnectionComponent,
    private route: ActivatedRoute) {
    this.currentUser = this.authentificationUser.currentUserValue;
  }

  ngOnInit(): void {
  }

}

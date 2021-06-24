import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Professional } from '../api/professional';
import { User } from '../api/user';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePAgeComponent implements OnInit {

  currentProfessional: Professional;
  currentUser: User;

  constructor(private _http: HttpClient,
    private authentificationPro: ConnexionProfessionalComponent, 
    private authentificationUser: ConnectionComponent
    ) {
      this.currentProfessional = this.authentificationPro.currentProfessionalValue; 
      this.currentUser = this.authentificationUser.currentUserValue; 
     }

  ngOnInit(): void {
  }

}

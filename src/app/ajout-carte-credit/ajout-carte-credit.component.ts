import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../api/Card';
import { User } from '../api/user';
import { UserLightDTO } from '../api/userLightDTO';
import { ConnectionComponent } from '../connexion/connection.component';
import { RegistationService } from '../registation.service';

export interface CardDTO{
    
  id: number;
  client: UserLightDTO;
  nom:string;
  numeroDeCarte:number;
  dateExpiration: Date;
  cvc: number;

}

@Component({
  selector: 'app-ajout-carte-credit',
  templateUrl: './ajout-carte-credit.component.html',
  styleUrls: ['./ajout-carte-credit.component.css']
})
export class AjoutCarteCreditComponent implements OnInit {
  currentUser: User;
  cards: CardDTO[] = [];
  card: CardDTO;
  newCard = new Card();
  msg="";

  constructor(
    private _service: RegistationService,
    private router: Router,
    private authentificationUser: ConnectionComponent
  ) { 
    this.currentUser = this.authentificationUser.currentUserValue; 
  }

  ngOnInit(): void {
  }


  addCart(){
    this._service.addCard(this.newCard).subscribe(
      data =>{
        console.log("response recieved");
        alert("is good")
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;      
      }
    ) 
  }

}

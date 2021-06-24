import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-rendez-vous-coiffure-men',
  templateUrl: './rendez-vous-coiffure-men.component.html',
  styleUrls: ['./rendez-vous-coiffure-men.component.css']
})
export class RendezVousCoiffureMenComponent implements OnInit {

  constructor(private router: Router, private authenticationService: ConnectionComponent) { }

  ngOnInit(): void {
  }

  showConnect(){
    if (this.authenticationService.currentUserValue.id != null) {
      this.router.navigate(['reservation/coupe/homme']);
    }else{
      this.router.navigate(['connexion']);
    }
  }
}

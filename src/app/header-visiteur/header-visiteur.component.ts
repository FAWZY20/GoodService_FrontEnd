import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../api/user';
import { ConnectionComponent } from '../connexion/connection.component';

@Component({
  selector: 'app-header-visiteur',
  templateUrl: './header-visiteur.component.html',
  styleUrls: ['./header-visiteur.component.css']
})
export class HeaderVisiteurComponent implements OnInit {
  currentUser: User;

  constructor(private authentificationUser: ConnectionComponent, private router: Router) { 
    this.currentUser = this.authentificationUser.currentUserValue; 
  }

  ngOnInit(): void {
    this.hiddenDiv();
  }

  hiddenDiv(){
    var currentUserHeader = this.currentUser.nom
    if(currentUserHeader != null){
      document.getElementById("visiteur")!.style.visibility = "hidden";
    }else{
      document.getElementById("client")!.style.visibility = "hidden";
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}

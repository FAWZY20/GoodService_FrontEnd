import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Professional } from '../api/professional';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';

export interface ProfessionalLightDTO {
  id:number;
  nom:string;
}


@Component({
  selector: 'app-professional-dashboard-home',
  templateUrl: './professional-dashboard-home.component.html',
  styleUrls: ['./professional-dashboard-home.component.css']
})
export class ProfessionalDashboardHomeComponent implements OnInit {
  currentProfessional: Professional;
  private routeSub: Subscription;
  profesionals =  [];

  constructor(private router: Router,
    private authentificationPro: ConnexionProfessionalComponent, 
    private route: ActivatedRoute
    ) {
       this.currentProfessional = this.authentificationPro.currentProfessionalValue;      
      }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(professionel => {
      console.log(professionel) //log the entire params object
      console.log(professionel['id']) //log the value of id
    });
  }
  

  logout() {
    localStorage.removeItem('currentProfessional');
    this.router.navigate(['/connexion-professional']);
  }

}

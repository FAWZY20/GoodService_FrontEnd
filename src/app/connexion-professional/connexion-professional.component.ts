import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { RegistationService } from '../_services/registation.service';

@Component({
  selector: 'app-connexion-professional',
  templateUrl: './connexion-professional.component.html',
  styleUrls: ['./connexion-professional.component.css']
})
export class ConnexionProfessionalComponent implements OnInit {

  private currentProfessionalSubject: BehaviorSubject<Professional>;
  public currentProfessional: Observable<Professional>;
  user = new Professional();
  msg = '';

  constructor(private _service: RegistationService, private _router: Router, private route: ActivatedRoute) {
    this.currentProfessionalSubject = new BehaviorSubject<Professional>(JSON.parse(localStorage.getItem('currentProfessional') || '{}'));
    this.currentProfessional = this.currentProfessionalSubject.asObservable();
  }

  ngOnInit(): void { }

  public get currentProfessionalValue(): Professional {
    return this.currentProfessionalSubject.value;
  }

  loginProfessional() {
    console.log(this.user);
    this._service.loginProfessionalFromRemote(this.user).subscribe(
      professionel => {
        console.log("response recieved");
        this._router.navigate([ 'professionel/'+ this.currentProfessionalValue.id +'/Dashboard/']);
        localStorage.setItem('currentProfessional', JSON.stringify(professionel));
        this.currentProfessionalSubject.next(professionel);
        return professionel;
      },
      error => {
        console.log("exception occured");
        this.msg = "exception occured";
      }
    )
  }

}

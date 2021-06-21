import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Professional } from '../api/professional';
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

  constructor(private _service: RegistationService, private _router: Router,) {
    this.currentProfessionalSubject = new BehaviorSubject<Professional>(JSON.parse(localStorage.getItem('ProfessionelConnected') || '{}'));
    this.currentProfessional = this.currentProfessionalSubject.asObservable();
  }

  ngOnInit(): void { }

  public get currentProfessionalValue(): Professional {
    return this.currentProfessionalSubject.value;
  }

  loginProfessional() {
    console.log(this.user);
    this._service.loginProfessionalFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/DashboardProfesionnal']);
        localStorage.setItem('ProfessionelConnected', JSON.stringify(this.user));
        this.currentProfessionalSubject.next(this.user);
        return this.user;
      },
      error => {
        console.log("exception occured");
        this.msg = "exception occured";
      }
    )
  }

}

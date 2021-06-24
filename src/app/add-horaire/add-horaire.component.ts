import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Horaire } from '../api/horaire';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { horaire } from '../professional-horaire-ouverture/professional-horaire-ouverture.component';
import { RegistationService } from '../registation.service';

export interface HoraireDTO {
  id: number;
  professional: ProfessionalLightDTO;
  jour: string;
  heureDeb: Time;
  heureFin: Time;
}

@Component({
  selector: 'app-add-horaire',
  templateUrl: './add-horaire.component.html',
  styleUrls: ['./add-horaire.component.css']
})
export class AddHoraireComponent implements OnInit {
  currentProfessional: Professional;
  horaires: HoraireDTO[] = [];
  horaire: HoraireDTO;
  newHoraire = new Horaire();
  editForm: FormGroup;
  msg="";


  constructor(private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationPro:  ConnexionProfessionalComponent,
    private route: ActivatedRoute

    ) 
    {
      this.currentProfessional = this.authentificationPro.currentProfessionalValue;
    }

  ngOnInit(): void {}

  addHoraire(){
    this._service.addHoraire(this.newHoraire).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['/Horaire'])
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;      
      }
    ) 
  }



}



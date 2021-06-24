import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Prix } from '../api/Prix';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../registation.service';

export interface PrixDTO{
  id: number;
  professional: ProfessionalLightDTO;
  prestation: string;
  prix: string
}

@Component({
  selector: 'app-form-prix-prestation',
  templateUrl: './form-prix-prestation.component.html',
  styleUrls: ['./form-prix-prestation.component.css']
})
export class FormPrixPrestationComponent implements OnInit {
  currentProfessional: Professional;
  prixs: PrixDTO[] = [];
  prix: PrixDTO;
  newPrix = new Prix();
  editForm: FormGroup;
  msg="";

  constructor(
    private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationPro:  ConnexionProfessionalComponent,
  ) { 
    this.currentProfessional = this.authentificationPro.currentProfessionalValue;
  }

  ngOnInit(): void {

  }

  addPrice(){
    this._service.addPrice(this.newPrix).subscribe(
      data =>{
        console.log("response recieved");
        alert("Bravo pour l'ajout de votre nouvelle prestation");
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;      
      }
    ) 
  }
  
  changeDataBeauter(){
    this.newPrix.prestation = this.newPrix.prestation1;
    this.newPrix.prix = this.newPrix.prix1;
  }

  changeDataMenage(){
    this.newPrix.prestation = this.newPrix.prestation2;
    this.newPrix.prix = this.newPrix.prix2;
  }

  changeDataCoach(){
    this.newPrix.prestation = this.newPrix.prestation1;
    this.newPrix.prix = this.newPrix.prix1;
  }
}

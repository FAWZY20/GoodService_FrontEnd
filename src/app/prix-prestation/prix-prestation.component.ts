import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../registation.service';

export interface Prix {
  id: number;
  professional: ProfessionalLightDTO;
  prestation: string;
  prix: string
}

@Component({
  selector: 'app-prix-prestation',
  templateUrl: './prix-prestation.component.html',
  styleUrls: ['./prix-prestation.component.css']
})
export class PrixPrestationComponent implements OnInit {
  currentProfessional: Professional;
  prixs: Prix[] = [];
  prix: Prix;
  private deleteId: number;
  editForm: FormGroup;

  constructor(
    private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationPro: ConnexionProfessionalComponent
  ) {
    this.currentProfessional = this.authentificationPro.currentProfessionalValue;
   }

  ngOnInit(): void {
    this.getPricePrestation();
  }

  getPricePrestation() {

    this.http.get<Prix[]>(environment.apiUrl + '/prix/professional/' + this.currentProfessional.id).subscribe(dtos => {
      this.prixs = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

}

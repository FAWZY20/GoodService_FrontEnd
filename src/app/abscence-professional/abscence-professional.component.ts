import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Absence } from '../api/absence';
import { Professional } from '../api/professional';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../registation.service';

@Component({
  selector: 'app-abscence-professional',
  templateUrl: './abscence-professional.component.html',
  styleUrls: ['./abscence-professional.component.css']
})
export class AbscenceProfessionalComponent implements OnInit {
  currentProfessional: Professional;
  absences: Absence[] = [];
  abscence: Absence;

  constructor(
    private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router,
    private authentificationPro: ConnexionProfessionalComponent,
  ) { 
    this.currentProfessional = this.authentificationPro.currentProfessionalValue;
  }

  ngOnInit(): void {
    this.getAbs();
  }

  getAbs() {

    this.http.get<Absence[]>(environment.apiUrl + '/absence/professional/' + this.currentProfessional.id).subscribe(dtos => {
      this.absences = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

  openDetails(targetModal, abscence: Absence) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('jourDeb')?.setAttribute('value', abscence.jourDeb);
    document.getElementById('jourFin')?.setAttribute('value', abscence.jourFin);
    document.getElementById('justificatif')?.setAttribute('value', abscence.justificatif);
  }

}

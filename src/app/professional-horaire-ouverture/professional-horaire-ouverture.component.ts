import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Horaire } from '../api/horaire';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../registation.service';

export interface horaire {

  id: number;
  professional: ProfessionalLightDTO;
  jour: string;
  heureDeb: Time;
  heureFin: Time;

}


@Component({
  selector: 'app-professional-horaire-ouverture',
  templateUrl: './professional-horaire-ouverture.component.html',
  styleUrls: ['./professional-horaire-ouverture.component.css']
})
export class ProfessionalHoraireOuvertureComponent implements OnInit {
  currentProfessional: Professional;
  horaires: horaire[] = [];
  horaire: horaire;
  private deleteId: number;
  editForm: FormGroup;

  constructor(
    private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationPro: ConnexionProfessionalComponent,
    private route: ActivatedRoute
  ) {
    this.currentProfessional = this.authentificationPro.currentProfessionalValue;
  }


  ngOnInit(): void {

    this.initForm();
    this.getHoraire();

  }

  initForm() {

    this.editForm = this.fb.group(
      {
        id: [''],
        professional: [''],
        jour: [''],
        heureDeb: [''],
        heureFin: [''],

      });

  }

  getHoraire() {

    this.http.get<horaire[]>(environment.apiUrl + '/horaire/professional/' + this.currentProfessional.id).subscribe(dtos => {
      this.horaires = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

  openDelete(targetModal, horaire: horaire) {
    this.deleteId = horaire.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = environment.apiUrl + '/horaire/' + this.deleteId + '/delete';
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


  openEdit(targetModal, horaire: horaire) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: horaire.id,
      professional: horaire.professional.id,
      jour: horaire.jour,
      heureDeb: horaire.heureDeb,
      heureFin: horaire.heureFin
    });
  }

  onSave() {
    const editURL = environment.apiUrl + '/horaire/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.getHoraire();
        this.modalService.dismissAll();
      });
  }

}

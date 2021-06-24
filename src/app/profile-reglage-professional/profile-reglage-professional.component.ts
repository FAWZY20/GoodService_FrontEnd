import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';

@Component({
  selector: 'app-profile-reglage-professional',
  templateUrl: './profile-reglage-professional.component.html',
  styleUrls: ['./profile-reglage-professional.component.css']
})
export class ProfileReglageprofessionalComponent implements OnInit {

  currentProfessional: Professional;
  private routeSub: Subscription;
  professionals: ProfessionalLightDTO[] = [];
  professional: ProfessionalLightDTO;
  editForm: FormGroup;


  constructor(
    private router: Router,
    private authentificationPro: ConnexionProfessionalComponent,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {

    this.currentProfessional = this.authentificationPro.currentProfessionalValue;

  }

  ngOnInit(): void {

    this.initForm();

  }

  initForm() {

    this.editForm = this.fb.group(
      {
        id: [''],
        poste: [''],
        nom: [''],
        prenom: [''],
        date_naissance: [''],
        siret: [''],
        latitude: [''],
        longitude: [''],
        numero: [''],
        email: [''],
        ville: ['']
      });

  }

  openEdit(targetModal, professional: Professional) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: professional.id,
      nom: professional.nom,
      prenom: professional.prenom,
      date_naissance: professional.date_naissance,
      poste: professional.poste,
      numero: professional.numero,
      email: professional.email,
      ville: professional.ville,
      latitude: professional.latitude,
      longitude: professional.longitude,
      siret: professional.siret
    });
  }


  onSave() {
    const editURL = environment.apiUrl + '/professional/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.modalService.dismissAll();
      });
  }

}

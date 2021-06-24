import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Professional } from '../api/professional';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { UserLightDTO } from '../api/userLightDTO';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../_services/registation.service';


export interface ReservationDTO {
  id: number;
  client: UserLightDTO;
  professional: ProfessionalLightDTO;
  prestation: string;
  appointementDate: string;
  address: string;
  etat: string;
  message: string;
}

@Component({
  selector: 'app-profesional-rendez-vous',
  templateUrl: './profesional-rendez-vous.component.html',
  styleUrls: ['./profesional-rendez-vous.component.css']
})

export class ProfesionalRendezVousComponent implements OnInit {
  currentProfessional: Professional;
  reservations: ReservationDTO[] = [];
  reservationPro: ReservationDTO;
  private deleteId: number;
  editForm: FormGroup;

  constructor(private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationPro:  ConnexionProfessionalComponent,
    private route: ActivatedRoute
  ) {
    this.currentProfessional = this.authentificationPro.currentProfessionalValue;
   }

  ngOnInit(): void {
    this.initForm();
    this.getProfessionalReservation();
  }


  
  getProfessionalReservation() {

    this.http.get<ReservationDTO[]>(environment.apiUrl + '/listprofesionel/' + this.currentProfessional.id ).subscribe(dtos => {
      this.reservations = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

  initForm() {

    this.editForm = this.fb.group(
      {
        id: [''],
        client: [''],
        professional: [''],
        prestation: [''],
        address: [''],
        appointementDate: [''],
        etat: [''],
        message: ['']
      });

  }


  openDetails(targetModal, reservation: ReservationDTO) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('prestation')?.setAttribute('value', reservation.prestation);
    document.getElementById('clientNom')?.setAttribute('value', reservation.client.nom);
    document.getElementById('date')?.setAttribute('value', reservation.appointementDate);
    document.getElementById('Adress')?.setAttribute('value', reservation.address);
    document.getElementById('etat')?.setAttribute('value', reservation.etat);
  }


  openEdit(targetModal, reservation: ReservationDTO) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({

      id: reservation.id,
      client: reservation.client,
      professional: reservation.professional,
      prestation: reservation.prestation,
      address: reservation.address,
      appointementDate: reservation.appointementDate,
      etat: reservation.etat,
      message: reservation.message

    });
  }


  onSave() {
    const editURL = environment.apiUrl + '/reservation/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.getProfessionalReservation();
        this.modalService.dismissAll();
      });
  }

  

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { UserLightDTO } from '../api/userLightDTO';
import { RegistationService } from '../_services/registation.service';


export interface ReservationDTO {
  id: number;
  client: UserLightDTO;
  professional: ProfessionalLightDTO;
  prestation: string;
  appointementDate: Date;
  address: string;
  etat: string;
}

@Component({
  selector: 'app-profesional-rendez-vous',
  templateUrl: './profesional-rendez-vous.component.html',
  styleUrls: ['./profesional-rendez-vous.component.css']
})

export class ProfesionalRendezVousComponent implements OnInit {
  reservations: ReservationDTO[] = [];
  reservationPro: ReservationDTO;
  private deleteId: number;
  editForm: FormGroup;

  constructor(private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.http.get<ReservationDTO[]>('http://localhost:8080/list').subscribe(dtos => {
      this.reservations = dtos;
    }, error => {
      console.error('error occuid', error)
    })

    this.editForm = this.fb.group(
      {
        id: [''],
        client: [''],
        professional: [''],
        prestation: [''],
        address: [''],
        appointementDate: [''],
        etat: ['']
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
      etat: reservation.etat
    });
  }


  onSave() {
    const editURL = 'http://localhost:8080/reservation/' + this.editForm.value.id + '/edit';
    console.log(this.editForm.value);
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}

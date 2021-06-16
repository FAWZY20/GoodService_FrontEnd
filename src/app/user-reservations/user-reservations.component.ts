import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistationService } from '../_services/registation.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ReservationDTO {
  id: number;
  professional: ProfessionalLightDTO;
  prestation: string;
  address: string;
  appointementDate: string;
  etat: string;
}


@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  reservations: ReservationDTO[] = [];
  reservation: ReservationDTO;
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
        professional: [''],
        prestation: [''],
        address: [''],
        appointementDate: [''],
        etat: ['']
      });

  }

  openDelete(targetModal, reservation: ReservationDTO) {
    this.deleteId = reservation.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }


  onDelete() {
    const deleteURL = 'http://localhost:8080/reservation/' + this.deleteId + '/delete';
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


  
  openDetails(targetModal, reservation: ReservationDTO) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('prestation')?.setAttribute('value', reservation.prestation);
    document.getElementById('professional')?.setAttribute('value', reservation.professional.nom);
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

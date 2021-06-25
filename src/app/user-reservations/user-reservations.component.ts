import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RegistationService } from '../registation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionComponent } from '../connexion/connection.component';
import { User } from '../api/user';
import { Subscription } from 'rxjs';
import { UserLightDTO } from '../api/userLightDTO';

export interface ReservationDTO {
  id: number;
  professional: ProfessionalLightDTO;
  client: UserLightDTO;
  prestation: string;
  address: string;
  appointementDate: string;
  etat: string;
  message: string;
}


@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  reservations: ReservationDTO[] = [];
  reservation: ReservationDTO;
  private deleteId: number;
  editForm: FormGroup;

  constructor(private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private authentificationUser: ConnectionComponent,
    private route: ActivatedRoute
  ) 
  {
    this.currentUser = this.authentificationUser.currentUserValue;
  }



  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(user => {
      console.log(user) //log the entire params object
      console.log(user['id']) //log the value of id
    });
    
    this.initForm();
    this.getUserReservation();

  }


  getUserReservation() {

    this.http.get<ReservationDTO[]>(environment.apiUrl + '/list/' + this.currentUser.id).subscribe(dtos => {
      this.reservations = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }


  initForm() {

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
    document.getElementById('message')?.setAttribute('value', reservation.message);
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
    const editURL = environment.apiUrl + '/reservation/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.getUserReservation();
        this.modalService.dismissAll();
      });
  }



}

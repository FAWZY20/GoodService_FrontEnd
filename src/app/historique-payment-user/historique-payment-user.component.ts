import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../api/user';
import { ConnectionComponent } from '../connexion/connection.component';
import { RegistationService } from '../registation.service';
import { ReservationDTO } from '../user-reservations/user-reservations.component';

@Component({
  selector: 'app-historique-payment-user',
  templateUrl: './historique-payment-user.component.html',
  styleUrls: ['./historique-payment-user.component.css']
})
export class HistoriquePaymentUserComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  reservations: ReservationDTO[] = [];
  reservation: ReservationDTO;

  constructor(private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router,
    private authentificationUser: ConnectionComponent,
    private route: ActivatedRoute
  ) 
  {
    this.currentUser = this.authentificationUser.currentUserValue;
  }

  ngOnInit(): void {
    this.getUserReservationFinishOrRefused();
  }

  getUserReservationFinishOrRefused() {

    this.http.get<ReservationDTO[]>(environment.apiUrl + '/list/fini/' + this.currentUser.id).subscribe(dtos => {
      this.reservations = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })
    
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

}

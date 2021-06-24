import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professional } from '../api/professional';
import { ConnexionProfessionalComponent } from '../connexion-professional/connexion-professional.component';
import { RegistationService } from '../registation.service';
import { ReservationDTO } from '../user-reservations/user-reservations.component';

@Component({
  selector: 'app-historique-professionel',
  templateUrl: './historique-professionel.component.html',
  styleUrls: ['./historique-professionel.component.css']
})
export class HistoriqueProfessionelComponent implements OnInit {

  currentPro: Professional;
  private routeSub: Subscription;
  reservations: ReservationDTO[] = [];
  reservation: ReservationDTO;

  constructor(
    private _service: RegistationService,
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router,
    private authentificationUser: ConnexionProfessionalComponent,
    private route: ActivatedRoute
  ) 
  {
    this.currentPro = this.authentificationUser.currentProfessionalValue;
   }

  ngOnInit(): void {
    this.getProReservationFinishOrRefused();
  }

  getProReservationFinishOrRefused() {

    this.http.get<ReservationDTO[]>(environment.apiUrl + '/list/pro/fini/' + this.currentPro.id).subscribe(dtos => {
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
    document.getElementById('client')?.setAttribute('value', reservation.client.nom);
    document.getElementById('date')?.setAttribute('value', reservation.appointementDate);
    document.getElementById('Adress')?.setAttribute('value', reservation.address);
    document.getElementById('etat')?.setAttribute('value', reservation.etat);
    document.getElementById('message')?.setAttribute('value', reservation.message);
  }

}

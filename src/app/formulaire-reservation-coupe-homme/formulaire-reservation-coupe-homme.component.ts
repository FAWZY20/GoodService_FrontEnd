import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professional } from '../api/professional';
import { Reservation } from '../api/reservationDTO';
import { User } from '../api/user';
import { ConnectionComponent } from '../connexion/connection.component';
import { RegistationService } from '../_services/registation.service';

export interface ProfessionalLightDTO {
  id: number;
  poste: string;
  nom: string;
  prenom: string;
  date_naissance: Date;
  siret: string;
  latitude: string;
  longitude: string;
  numero: number;
  email: string;
  ville: string;
}

@Component({
  selector: 'app-formulaire-reservation-coupe-homme',
  templateUrl: './formulaire-reservation-coupe-homme.component.html',
  styleUrls: ['./formulaire-reservation-coupe-homme.component.css']
})
export class FormulaireReservationCoupeHommeComponent implements AfterViewInit {
  currentUser: User;
  private routeSub: Subscription;
  professionals: ProfessionalLightDTO[] = [];
  professional: ProfessionalLightDTO;
  reservation = new Reservation();
  msg = '';
  
  constructor(
    private _service: RegistationService,
    private _router: Router,
    private http: HttpClient,
    private modalService: NgbModal,
    private authentificationUser: ConnectionComponent,
  ) {
    this.currentUser = this.authentificationUser.currentUserValue;
  }


  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
    this.getProfessionalByCity();
    
  }


 
  


  getProfessionalByCity() {

    this.http.get<Professional[]>(environment.apiUrl + '/professional/list/' + this.currentUser.ville).subscribe(dtos => {
      this.professionals = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

  openDetails(targetModal, professional: ProfessionalLightDTO) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('nom')?.setAttribute('value', professional.nom);
    document.getElementById('prenom')?.setAttribute('value', professional.prenom);
    document.getElementById('description')?.setAttribute('value', professional.prenom);
    document.getElementById('poste')?.setAttribute('value', professional.poste);
    document.getElementById('ville')?.setAttribute('value', professional.ville);
  }


  registerReservation() {
    this._service.registerAppointment(this.reservation).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/ReservationUser'])
      },
      error => {
        console.log("exception occured");
        this.msg = error.error;
      }
    )
  }


  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {

    const {
      coords: { latitude, longitude },
    } = position;


    const map = L.map('map').setView([latitude, longitude], 3);

    var iconBase = 'http://localhost:4200/assets/img/';

    const zoomLevel = 10;

    var myIcon = L.icon({
      iconUrl: iconBase + "localisation.png",
      iconSize: [30, 30],
      iconAnchor: [25, 50],
      popupAnchor: [-3, -76],

    })


    var marker = L.marker([latitude, longitude], { icon: myIcon }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 15,
      maxZoom: 20,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
    }).addTo(map);

  }


}

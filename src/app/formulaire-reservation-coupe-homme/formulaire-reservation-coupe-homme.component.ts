import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Reservation } from '../api/reservationDTO';
import { RegistationService } from '../registation.service';

@Component({
  selector: 'app-formulaire-reservation-coupe-homme',
  templateUrl: './formulaire-reservation-coupe-homme.component.html',
  styleUrls: ['./formulaire-reservation-coupe-homme.component.css']
})
export class FormulaireReservationCoupeHommeComponent implements AfterViewInit {

  reservation = new Reservation();
  msg=''; 
  
  constructor(private _service : RegistationService, private _router : Router) { }
  
  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }
  registerReservation()
  {
    this._service.registerAppointment(this.reservation).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/ReservationUser'])
      } ,
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

    const zoomLevel =10;
    
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

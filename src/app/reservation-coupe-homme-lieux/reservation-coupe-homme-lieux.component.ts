import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-reservation-coupe-homme-lieux',
  templateUrl: './reservation-coupe-homme-lieux.component.html',
  styleUrls: ['./reservation-coupe-homme-lieux.component.css']
})
export class ReservationCoupeHommeLieuxComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }


  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
      coords: { latitude, longitude },
    } = position;


    const map = L.map('map').setView([latitude, longitude], 3);

    var iconBase = 'http://localhost:4200/assets/img/';

    const zoomLevel =12;
    
    var myIcon = L.icon({
      iconUrl: iconBase + "localisation.png",
      iconSize: [30, 30],
      iconAnchor: [25, 50],
      popupAnchor: [-3, -76],
  
    })

    var marker = L.marker([latitude, longitude], { icon: myIcon }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 20,
      maxZoom: 22,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
    }).addTo(map);

  }
}

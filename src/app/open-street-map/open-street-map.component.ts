import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements AfterViewInit {

   map;

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap()
  }

  createMap(){
    const parcThabor ={
      lat: 	48.856614,
      lng:  2.3522219,
  
    }

    const zoomLevel = 17;
    this.map = L.map('map', {
    center: [parcThabor.lat, parcThabor.lng],
    zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 22,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
  }

}

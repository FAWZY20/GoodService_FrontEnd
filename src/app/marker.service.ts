import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
import { Professional } from './api/professional';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  professionels: Professional;
 
  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get<Professional[]>(environment.apiUrl +'/professional/list').forEach(professional => {
      
    });

  }
}
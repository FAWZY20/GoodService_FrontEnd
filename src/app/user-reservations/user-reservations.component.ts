import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ReservationDTO{
  id:number;
  profesional_id:number;
  appointement_DateTime:Date;
  etat:string;
}


@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  reservations:ReservationDTO[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get<ReservationDTO[]>('http://localhost:8080/ReservationUser').subscribe(dtos=>{
        this.reservations = dtos;
      }, error=>{
        console.error('error occuid', error)
      })
  }

}

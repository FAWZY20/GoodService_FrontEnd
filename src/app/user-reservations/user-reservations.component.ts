import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessionalLightDTO } from '../api/professionalLightDTO';
import { UserLightDTO } from '../api/userLightDTO';

export interface ReservationDTO{
  id?:number;
  professional:ProfessionalLightDTO;
  client:UserLightDTO;
  appointmentDateTime?:Date;
  status?:string;
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
      this.http.get<ReservationDTO[]>('http://localhost:8080/api/reservation/list').subscribe(dtos=>{
        this.reservations = dtos;
      }, error=>{
        console.error('error occuid', error)
      })
  }

}

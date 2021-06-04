import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { RegistationService } from '../registation.service';
import { ReservationDTO } from '../user-reservations/user-reservations.component';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  constructor(private registrationService: RegistationService ) { }

  ngOnInit(): void {
  }

  onClick(){
    let body: ReservationDTO = {
      id:0,
      professional:{
        id:1
      },
      client:{
        id:1
      }

    }
    //todo DISABLE BUTTON
    this.registrationService.createReservation(body).subscribe(res => {
      console.log('ok');
      //TODO navigate
    }, error =>{
      console.error('faild', error);
      //TODO RENABE BOTON
    })
  }

}

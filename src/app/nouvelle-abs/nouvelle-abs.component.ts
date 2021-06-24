import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from '../api/absence';
import { RegistationService } from '../registation.service';

@Component({
  selector: 'app-nouvelle-abs',
  templateUrl: './nouvelle-abs.component.html',
  styleUrls: ['./nouvelle-abs.component.css']
})
export class NouvelleAbsComponent implements OnInit {
  absence = new Absence();
  msg="";

  constructor(private service : RegistationService, private router : Router) { }

  ngOnInit(): void {
  }

  registerAbscence(){
    this.service.addAbscence(this.absence).subscribe(
      data =>{
        console.log("response recieved");
      } ,
      error => {
        console.log("exception occured");
        this.msg = error.error;
        
      }
    ) 
  }

}

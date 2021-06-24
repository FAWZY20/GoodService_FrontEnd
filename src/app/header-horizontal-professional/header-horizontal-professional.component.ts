import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-horizontal-professional',
  templateUrl: './header-horizontal-professional.component.html',
  styleUrls: ['./header-horizontal-professional.component.css']
})
export class HeaderHorizontalProfessionalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('ProfessionelConnected');
    this.router.navigate(['/connexion-professional']);
  }

}

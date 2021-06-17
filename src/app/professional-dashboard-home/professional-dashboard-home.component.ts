import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professional } from '../api/professional';

@Component({
  selector: 'app-professional-dashboard-home',
  templateUrl: './professional-dashboard-home.component.html',
  styleUrls: ['./professional-dashboard-home.component.css']
})
export class ProfessionalDashboardHomeComponent implements OnInit {
  currentProfessional: Professional;
  profesionals: Professional[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('ProfessionelConnected');
    // this.currentUserSubject.next(null);
    this.router.navigate(['/connexion-professional']);
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionComponent } from '../connexion/connection.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLightDTO } from '../api/userLightDTO';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  currentUser: User;
  private routeSub: Subscription;
  users: UserLightDTO[] = [];
  user: UserLightDTO;
  editForm: FormGroup;

  constructor(private router: Router,
    private authentificationUser: ConnectionComponent,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private http: HttpClient,
    private fb: FormBuilder,) {

    this.currentUser = this.authentificationUser.currentUserValue;

  }

  ngOnInit(): void {
    this.initForm();
    this.getUser();

  }

  getUser() {

    this.http.get<UserLightDTO[]>(environment.apiUrl + '/utilisateur/' + this.currentUser.id).subscribe(dtos => {
      this.users = dtos;
    }, error => {
      console.error('error occured while getting user reservations', error)
    })

  }

  initForm() {

    this.editForm = this.fb.group(
      {
        id:[''],
        nom:[''],
        prenom:[''],
        numero:[''],
        email:[''],
        adresse:[''],
        code_postal:[''],
        ville:['']
      });

  }

  openEdit(targetModal, user: User) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      numero: user.numero,
      email: user.email,
      adresse: user.adresse,
      code_postal: user.code_postal,
      ville: user.ville
    });
  }

  onSave() {
    const editURL = environment.apiUrl + '/user/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.getUser();
        this.modalService.dismissAll();
      });
  }

}

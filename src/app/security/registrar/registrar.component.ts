import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from '../Security.service';
import { User } from '../user.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private secService: SecurityService) { }

  ngOnInit(): void {
  }

  registrarUsuario(f: NgForm){
    const data : User = {
      Email: f.value.email,
      Password: f.value.password,
      FirstName: f.value.firstname,
      LastName: f.value.lastname,
      Username: f.value.username,
      UserId: ""
    };
    this.secService.registerUser(data);
  }

}

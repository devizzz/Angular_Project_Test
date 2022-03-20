import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from '../Security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private secService: SecurityService) { }

  ngOnInit(): void {
  }

  loginUser(f : NgForm){
    const data = {
      Email: f.value.email,
      Password: f.value.password
    };
    this.secService.login(data);
  }

}

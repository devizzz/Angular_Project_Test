import { Subject } from "rxjs";

import { User } from "./user.model";
import { LoginData } from "./login-data.model";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class SecurityService {
  securityChange = new Subject<boolean>();
  private user?: User;

  constructor(private router: Router){}

  registerUser(usr: User) {
    this.user = {
      Email: usr.Email,
      UserId: Math.round(Math.random() * 10000).toString(),
      FirstName: usr.FirstName,
      LastName: usr.LastName,
      Username: usr.Username,
      Password: usr.Password
    }

    this.securityChange.next(true);
    this.router.navigate(['/']);
  }

  login(loginData: LoginData) {
    this.user = {
      Email: loginData.Email,
      UserId: Math.round(Math.random() * 10000).toString(),
      FirstName: "",
      LastName: "",
      Username: "",
      Password: loginData.Password
    }

    this.securityChange.next(true);
    this.router.navigate(['/']);
  }

  logOut() {
    this.user = undefined;
    this.securityChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  onSesion() : boolean{
    return this.user != null;
  }
}

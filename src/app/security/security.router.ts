import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SecurityService } from "./Security.service";

@Injectable()
export class SecurityRouter implements CanActivate{

  constructor(private secService: SecurityService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.secService.onSesion())
        return true;
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }

}

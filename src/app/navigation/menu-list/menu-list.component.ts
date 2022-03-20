import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SecurityService } from '../../security/Security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  statusUser: boolean = false;
  userSubscription? : Subscription;

  constructor(private secService: SecurityService) { }

  ngOnInit(): void {
    this.userSubscription = this.secService.securityChange.subscribe(status => {
      this.statusUser = status;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  onMenuCloseDispatch(){
    this.menuToggle.emit();
  }

  onSesionCloseDispatch(){
    this.menuToggle.emit();
  }

  onLogOut(){
    this.secService.logOut();
    this.onSesionCloseDispatch();
  }

}

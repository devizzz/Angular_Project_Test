import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from '../../security/Security.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnDestroy {
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

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

  onLogOut(){
    this.secService.logOut();
  }

}

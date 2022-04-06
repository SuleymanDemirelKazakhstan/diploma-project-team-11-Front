import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { RegisterModalComponent } from './registerModal/registerModal.component';
import { LoginModalComponent } from './loginModal/loginModal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openLoginDialog() {
    this.dialog.open(LoginModalComponent, {
      autoFocus: false
    });
  }

  openRegistrationDialog() {
    this.dialog.open(RegisterModalComponent, {
      autoFocus: false,
      width: '33%'
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

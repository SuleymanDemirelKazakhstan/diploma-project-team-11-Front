import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterModalComponent } from '../registerModal/registerModal.component';

@Component({
  selector: 'nav-login-modal',
  templateUrl: './loginModal.component.html'
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginRef: MatDialogRef<LoginModalComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  openRegistrationDialog() {
    this.loginRef.close();
    this.dialog.open(RegisterModalComponent, {
      autoFocus: false,
      width: '33%'
    });
  }
}

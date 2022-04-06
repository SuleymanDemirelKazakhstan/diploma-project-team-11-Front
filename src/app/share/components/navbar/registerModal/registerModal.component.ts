import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginModalComponent } from '../loginModal/loginModal.component';

@Component({
  selector: 'nav-register-modal',
  templateUrl: './registerModal.component.html'
})
export class RegisterModalComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private registrationRef: MatDialogRef<RegisterModalComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  openLoginDialog() {
    this.registrationRef.close();
    this.dialog.open(LoginModalComponent, {
      autoFocus: false
    });
  }
}

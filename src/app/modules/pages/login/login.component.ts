import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  showingPassword = false;
  loading = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
    });
  }

  loginWithEmail() {
    if (this.form.valid) {
      this.loading = true;
      this._auth
        .signInWithEmailAndPassword(
          this.form.value.email,
          this.form.value.password
        )
        .then((response) => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  }

  showPassword() {
    this.showingPassword = !this.showingPassword;
  }
}

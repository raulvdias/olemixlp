import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResponseComponent } from '../../common/dialog/response/response.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  showingPassword = false;
  loading = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _auth: AngularFireAuth,
    private _dialog: MatDialog,
    private _router: Router
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

            this.openResponseDialog(
              'Login realizado com sucesso! Você será redirecionado.',
              'check_circle',
              'green-500'
            );
          }, 2000);

          // this._router.navigate(['/landing']);
        })
        .catch((err) => {
          this.openResponseDialog(
            'Falha ao realizar login! Verifique suas credenciais e tente novamente',
            'highlight_off',
            'red-500'
          );
        });
    }
  }

  showPassword() {
    this.showingPassword = !this.showingPassword;
  }

  openResponseDialog(message: string, icon: string, color: string) {
    this._dialog.open(ResponseComponent, {
      data: {
        message: message,
        icon: icon,
        color: color,
      },
    });
  }
}

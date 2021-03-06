import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  registered = false;
  user: User | undefined;
  error: HttpErrorResponse | undefined;
  errorText = '';
  invalidCredentials = false;
  nonMatchingPassword = false;
  passwordNotValid = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    this.invalidCredentials = false;
    this.userService.userSubject.subscribe(user => {
      this.user = user;
      this.router.navigate(['/']);
    });
    this.userService.errorSubject.subscribe((error) => {
      if (error) {
        if (error.status === 401) {
          this.invalidCredentials = true;
        } else if (error.status === 0) {
          this.error = error;
          this.errorText = 'Er is een onbekende foutmelding opgetreden, ' +
            'wij vragen u de pagina te sluiten en het later nog een keer te proberen';
        } else {
          this.error = error;
          this.errorText = error.message;
        }
      }
    });
    this.userService.login(form.value.email, form.value.password);
  }
  onRegister(form: NgForm): void {
    this.passwordNotValid = false;
    this.nonMatchingPassword = false;
    if (((form.value.pwdReg.length < 10) || !(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(form.value.pwdReg)) ||
      !(/\d/.test(form.value.pwdReg)))) {
      this.passwordNotValid = true;
    } else if (form.value.pwdReg === form.value.pwdRegConfirm) {
      this.userService.register(form.value.emailReg.toLowerCase(), form.value.pwdReg);
      this.registered = true;
    }
    else {
      this.nonMatchingPassword = true;
    }
  }

  adminPortal(): void {
    this.router.navigate(['/sign-in-or-up/admin']);
  }

  closeError(): void {
    this.error = undefined;
  }

  close(): void {
    this.registered = false;
    this.router.navigate(['/']);
  }
}

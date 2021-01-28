import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-admin-user-input',
  templateUrl: './admin-user-input.component.html',
  styleUrls: ['./admin-user-input.component.scss']
})
export class AdminUserInputComponent implements OnInit {
  passwordNotValid = false;
  passwordsNotEqual = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveInput(form: NgForm): void {
    this.passwordsNotEqual = false;
    this.passwordNotValid = false;
    if (((form.value.password.length < 10) || !(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(form.value.password)) ||
      !(/\d/.test(form.value.password)))) {
      this.passwordNotValid = true;
    } else if (form.value.password === form.value.passwordConfirm) {
      this.userService.registerAdmin(form.value.email, form.value.password);
    } else {
      this.passwordsNotEqual = true;
    }
  }
}

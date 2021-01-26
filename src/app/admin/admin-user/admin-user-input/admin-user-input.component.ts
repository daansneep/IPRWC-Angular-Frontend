import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-admin-user-input',
  templateUrl: './admin-user-input.component.html',
  styleUrls: ['./admin-user-input.component.scss']
})
export class AdminUserInputComponent implements OnInit {
  passwordsNotEqual = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveInput(form: NgForm): void {
    this.passwordsNotEqual = false;
    if (form.value.password === form.value.passwordConfirm) {
      this.userService.registerAdmin(form.value.email, form.value.password);
    } else {
      this.passwordsNotEqual = true;
    }
  }

}

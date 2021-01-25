import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: User | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    this.userService.login(form.value.email, form.value.password);
    this.userService.userSubject.subscribe(user => {
      this.user = user;
      this.router.navigate(['/']);
    });
  }

  onRegister(form: NgForm): void {
    this.userService.register(form.value.email, form.value.password);
  }

  adminPortal(): void {
    this.router.navigate(['/sign-in-or-up/admin']);
  }

}

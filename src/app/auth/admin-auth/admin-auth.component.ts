import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    this.userService.loginAdmin(form.value.email, form.value.password);
    this.userService.userSubject.subscribe(user => {
      if (user && user.isAdmin) {
        this.user = user;
        this.router.navigate(['/']);
      }
    });
  }

}

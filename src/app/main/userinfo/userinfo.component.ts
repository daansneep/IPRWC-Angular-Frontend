import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  userLoggingOut = false;
  userDataSaved = false;
  user: User = new User('', '', false, '', '', -1, '', '');

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.user || new User('', '', false, '', '', -1, '', '');
  }

  onSubmit(form: NgForm): void {
    const userInfo = {
      postalcode: form.value.postalCode,
      streetname: form.value.streetName,
      housenumber: form.value.houseNumber,
      addition: form.value.suffix,
      city: form.value.city
    };
    this.userService.sendUserInfo(userInfo);
    this.userDataSaved = true;
  }

  closeConfirmation(): void {
    this.userDataSaved = false;
  }

  logOut(): void {
    this.userLoggingOut = true;
  }

  closeAndGoBack(): void {
    this.userLoggingOut = false;
  }

  closeAndLogout(): void {
    this.userLoggingOut = false;
    this.userService.userSubject.next(undefined);
    this.router.navigate(['sign-in-or-up']);
  }

}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  user: User = new User('', '', false, '', '', -1, '', '');

  constructor(private userService: UserService) { }

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
    }
    this.userService.sendUserInfo(userInfo);
  }

}

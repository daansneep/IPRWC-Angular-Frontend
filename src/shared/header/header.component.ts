import { Component, OnInit } from '@angular/core';
import {UserService} from '../../app/services/user.service';
import {User} from '../../app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.subscribe((user: User | undefined) => {
      this.isLoggedIn = !!user;
    });
  }

}

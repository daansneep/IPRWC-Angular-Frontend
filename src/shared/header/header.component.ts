import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.subscribe((user: User | undefined) => {
      this.isLoggedIn = !!user;
      if (user) {
        this.isAdmin = user.isAdmin;
      }
    });
  }

}

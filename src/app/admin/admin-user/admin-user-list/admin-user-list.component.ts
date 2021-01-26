import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {Usermeta} from '../../../../models/usermeta.model';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {
  users: Usermeta[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.users.subscribe(users => {
      this.users = [];
      users.forEach(user => {
        this.users.push(user);
      });
    });
  }

  onDeleted(event: number): void {
    this.userService.deleteUser(event);
  }
}

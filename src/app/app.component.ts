import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IPRWC-Angular-Frontend';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.login('s1122353@student.hsleiden.nl', 'v%zjTW8D3h6cjKmz9s209#z&E');
  }

}

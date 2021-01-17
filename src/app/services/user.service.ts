import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject = new Subject<User | undefined>();
  user: User | undefined;


  constructor(private daoService: DaoService) {
    this.userSubject.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string): void {
    this.daoService.sendPostRequest('/auth/login', { email, password })
      .subscribe(res => {
        this.userSubject.next(new User(res.email, res.token, res.isadmin));
        this.daoService.sendGetRequest('/profile/data', res.token)
          .subscribe(userData => {
            this.userSubject.next(new User(res.email, res.token, res.isadmin, userData.postalcode, userData.streetname,
              userData.housenumber, userData.addition, userData.city));
          });
      });
  }

  loginAdmin(email: string, password: string): void {
    this.daoService.sendPostRequest('/auth/login/admin', { email, password })
      .subscribe(res => {
        this.userSubject.next(new User(res.email, res.token, res.isadmin));
        this.daoService.sendGetRequest('/profile/data', res.token)
          .subscribe(userData => {
            this.userSubject.next(new User(res.email, res.token, res.isadmin, userData.postalcode, userData.streetname,
              userData.housenumber, userData.addition, userData.city));
          });
      });
  }

  logout(): void {
    this.userSubject.next(undefined);
  }

  register(email: string, password: string): void {
    this.daoService.sendPostRequest('/auth/register', { email, password })
      .subscribe(res => {
        console.log(res);
      });
  }

  registerAdmin(email: string, password: string): void {
    if (this.user) {
      this.daoService.sendPostRequest('/auth/register/admin', { email, password }, )
        .subscribe(res => {
          console.log(res);
        });
    } else {
      throw new Error('Invalid operation, user is not logged in');
    }
  }

  sendUserInfo(userinfo: { postalcode: string, streetname: string, housenumber: number, addition: string, city: string} ): void {
    let token;
    if (this.user) {
      token = this.user.token;
    }
    this.daoService.sendPostRequest('/profile/data', userinfo, token)
      .subscribe(res => {
        console.log(res);
      });
  }
}

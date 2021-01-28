import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Usermeta} from '../models/usermeta.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject = new Subject<User | undefined>();
  errorSubject = new Subject<HttpErrorResponse | undefined>();
  user: User | undefined;
  error: Error | undefined;
  users = new Subject<Usermeta[]>();


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
      }, error => {
        this.error = error;
        this.errorSubject.next(error);
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
      .subscribe( () => {
          this.login(email, password);
        }
      );
  }

  registerAdmin(email: string, password: string): void {
    if (this.user) {
      this.daoService.sendPostRequest('/auth/register/admin', { email, password }, this.user.token)
        .subscribe(() => {
          this.getAllUsers();
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
      .subscribe();
  }

  getAllUsers(): void {
    let token;
    if (this.user) {
      token = this.user.token;
    }
    this.daoService.sendGetRequest('/auth/admin/users', token)
      .subscribe(res => {
        this.users.next(res.users);
    });
  }

  deleteUser(id: number): void {
    let token;
    if (this.user) {
      token = this.user.token;
    }
    this.daoService.sendDeleteRequest(`/auth/admin/delete/${id}`, token)
      .subscribe(() => {
        this.getAllUsers();
      });
  }
}

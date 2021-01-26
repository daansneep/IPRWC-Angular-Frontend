import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Usermeta} from '../../../../../models/usermeta.model';

@Component({
  selector: 'app-admin-user-item',
  templateUrl: './admin-user-item.component.html',
  styleUrls: ['./admin-user-item.component.scss']
})
export class AdminUserItemComponent implements OnInit {
  @Input() user: Usermeta = {accountnumber: -1, email: '', isadmin: false};
  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleted.emit(this.user.accountnumber);
  }

}

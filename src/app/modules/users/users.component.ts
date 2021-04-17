import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UsersService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = () => {
    this.spinner.show();
    this.service.users().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  };

}

import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];

  constructor(private service: UsersService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = () => {
    this.service.users().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    }, error => {

    });
  };

}

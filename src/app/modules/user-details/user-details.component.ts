import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private  service: UsersService) {
    this.service.user.asObservable().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {

  }

}

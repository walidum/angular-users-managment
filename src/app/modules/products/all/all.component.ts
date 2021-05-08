import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  message: string;
  cpt = 0;

  constructor(private service: UsersService) {
    this.service.share.asObservable().subscribe(message => {
      this.message = message;
    });
  }

  ngOnInit(): void {
  }

  change = () => {
    this.cpt++
    this.service.share.next('New message : ' + this.cpt);
  }
}

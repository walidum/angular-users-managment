import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  message: string;

  constructor(private service: UsersService) {
    this.service.share.asObservable().subscribe(m => {
      this.message = m;
    });
  }

  ngOnInit(): void {
  }

}

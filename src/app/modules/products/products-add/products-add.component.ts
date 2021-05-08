import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  message: string;

  constructor(private service: UsersService) {
    this.service.share.asObservable().subscribe(m => {
      this.message = m;
    });
  }

  ngOnInit(): void {
  }

}

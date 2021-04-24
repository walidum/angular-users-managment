import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  EXP = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
  types = [
    {value: 'CLIENT', viewValue: 'Client'},
    {value: 'COMMERCANT', viewValue: 'Commerçant'}
  ];
  group = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.EXP)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private spinner: NgxSpinnerService,
              private service: UsersService
  ) {
  }

  ngOnInit(): void {
  }

  send = () => {
    const user = {};
    this.spinner.show();
    this.service.register(user).subscribe(res => {

      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      console.log(error);
    });

  };

}

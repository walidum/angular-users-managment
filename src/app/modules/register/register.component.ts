import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  send = () => {
    if (this.group.get('firstName').invalid) {
      Swal.fire('Prénom invalide ', '', 'error');
      return;
    }

  };
}

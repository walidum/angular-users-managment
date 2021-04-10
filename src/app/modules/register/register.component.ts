import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  types = [
    {value: 'CLIENT', viewValue: 'Client'},
    {value: 'COMMERCANT', viewValue: 'Commerçant'}
  ];
   group = new FormGroup({
     firstName : new FormControl('', [Validators.required]),
     lastName: new FormControl('', [Validators.required]),
     type : new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required]),
     password: new FormControl('', [Validators.required, Validators.minLength(6)])
   });
  constructor() { }

  ngOnInit(): void {
  }
   send = () => {
    console.log(this.group.get('firstName').value);
   }
}

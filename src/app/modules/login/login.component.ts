import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {NgxSpinnerService} from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  group: FormGroup;

  constructor(private fb: FormBuilder,
              private spinner: NgxSpinnerService,
              private service: UsersService) {
  }

  ngOnInit(): void {
    this.group = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send = () => {
    this.spinner.show();
    this.service.login(this.group.value).subscribe((res: any) => {
      console.log(res);
      if (!res.token) {
        Swal.fire(res.msg, '', 'error');
      } else {
        Swal.fire('', '', 'success');
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      Swal.fire('ERROR', '', 'error');
    });
  };
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

const API_URI = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  users = () => {
    return this.http.get<User[]>(API_URI + 'users');
  };
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {BehaviorSubject, Observable} from 'rxjs';

const API_URI = 'https://jsonplaceholder.typicode.com/';
const API_LOCAL = 'http://localhost:3001/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  users = (): Observable<User[]> => {
    return this.http.get<User[]>(API_LOCAL + 'users');
  };
  register = (user: User) => {
    return this.http.post<User>(API_LOCAL + 'register', user);
  };
  login = (params: any) => {
    return this.http.post(API_LOCAL + 'login', params);
  };
}

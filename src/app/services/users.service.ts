import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {BehaviorSubject, Observable} from 'rxjs';

const API_URI = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  users = (): Observable<User[]> => {
    return this.http.get<User[]>(API_URI + 'users');
  };

}

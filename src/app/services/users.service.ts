import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URI = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  users = () => {
    return this.http.get<any>(API_URI + 'users');
  };
}

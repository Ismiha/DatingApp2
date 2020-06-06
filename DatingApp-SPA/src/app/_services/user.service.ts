import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AlertifyjsService } from './alertifyjs.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
constructor(private http: HttpClient, private alertify: AlertifyjsService) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users');
}

getUser(id: any): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

setMainPhoto(userId: number, id: number ) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
}
}

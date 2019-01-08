import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/";
  constructor(private http: Http) { }

  registerUser(user){
    return this.http.post(this.url+'user/register',user);
  }

  loginUser(user){
    return this.http.post(this.url+'user/login',user);
  }
}

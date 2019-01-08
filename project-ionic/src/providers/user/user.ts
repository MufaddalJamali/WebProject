import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  private url = "http://localhost:3000/";
  constructor(private http: Http) {
    console.log('Hello UserProvider Provider');
  }

  register(user){
    return this.http.post(this.url+"user/register",user);
  }

  login(user){
    return this.http.post(this.url+"user/login",user);
  }

}

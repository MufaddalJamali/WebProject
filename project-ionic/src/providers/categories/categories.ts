// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  private url = "http://localhost:3000/";
  constructor(public http: Http) {
    console.log('Hello CategoriesProvider Provider');
  }

  getAllCategories(){
    return this.http.get(this.url+'categories');
  }

}

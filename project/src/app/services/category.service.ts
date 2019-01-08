import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getAllCategories(){
    return this.http.get(this.url+'categories');
  }
}

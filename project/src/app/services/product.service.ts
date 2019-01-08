import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getAllProducts(){
    return this.http.get(this.url+"products");
  }

  getProductsByCategory(cid){
    return this.http.get(this.url+'products/?cid='+cid);
  }
}

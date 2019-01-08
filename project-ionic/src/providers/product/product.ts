import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  private url = "http://localhost:3000/";
  constructor(public http: Http) {
    console.log('Hello CategoriesProvider Provider');
  }

  getProducts(cid){
    return this.http.get(this.url+'products/?cid='+cid);
  }

  addToCart(pid,uid){
    return this.http.post(this.url+'cart/add',{pid,uid});
  }

}

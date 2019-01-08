import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = "http://localhost:3000/";
  constructor(private http: Http) { }

  addToCart(pid,uid){
    return this.http.post(this.url+'cart/add',{pid,uid});
  }

  showCart(uid){
    return this.http.get(this.url+'cart/showCart/?uid='+uid);
  }
}

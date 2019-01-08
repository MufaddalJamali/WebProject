import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];
  constructor(private srvCart:CartService) { }

  ngOnInit() {
    this.showProducts();
  }

  showProducts(){
    var uid = localStorage.getItem("UserID");
    this.srvCart.showCart(uid).subscribe(res=>{
      this.products = res.json();
      console.log(this.products);
    });
  }

  calulateValueForEachItem(itemInfo) {
    return itemInfo.Price * itemInfo.Qty;
  }

}

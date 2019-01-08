import { CartService } from './../services/cart.service';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any[];
  products: any = [];
  addedToCart : boolean;

  constructor(private srvCategory: CategoryService, private srvProducts: ProductService, private srcCart: CartService, private router: Router) { }
  val: string;
  ngOnInit() {
    this.getAllCategories();
    this.getAllProducts();

  }

  getAllProducts() {
    this.val = localStorage.getItem("Name");
    this.srvProducts.getAllProducts()
      .subscribe(res => {
        this.products = res.json();
      });
  }

  getAllCategories() {
    this.srvCategory.getAllCategories()
      .subscribe(response => {
        this.categories = response.json();
      });
  }

  getProductsByCategory(cid) {
    this.products = null;
    this.srvProducts.getProductsByCategory(cid)
      .subscribe(res => {
        this.products = res.json();
        console.log(res.json());
      });
  }

  addToCart(pid) {
    var uid = localStorage.getItem("UserID");
    console.log(uid+" "+pid);
    if (localStorage.length > 0) {
      this.srcCart.addToCart(pid, uid).subscribe(res=>{
        if(res.json().addedToCart==true){
          this.addedToCart = true;
        }else{
          this.addedToCart = false;
        }
      });
    } else {
      this.router.navigate(['/loginsignup']);
    }

    setTimeout(() => {
      this.addedToCart = false;
    }, 3000);
  }

}

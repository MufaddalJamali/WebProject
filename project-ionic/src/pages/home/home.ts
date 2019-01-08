import { ProductProvider } from './../../providers/product/product';
import { CategoriesProvider } from './../../providers/categories/categories';

import { ProductsPage } from './../products/products';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any[];

  constructor(public navCtrl: NavController, private category_service: CategoriesProvider, private srvProducts: ProductProvider) {

  }

  ionViewDidLoad() {
    this.getAllCategories();
    
  }

  getAllCategories() {
    this.category_service.getAllCategories()
      .subscribe(response => {
        this.categories = response.json();
        console.log(this.categories);
      });
  }

  getProducts(cid) {
    console.log(cid);
    this.navCtrl.push(ProductsPage,{
      categoryId:cid
    });
  }


}

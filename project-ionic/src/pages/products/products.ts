import { ShowCartPage } from './../show-cart/show-cart';
import { Storage } from '@ionic/storage';
import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams,private srvProduct:ProductProvider,
    private toastCtrl: ToastController,private storage:Storage) {
  }

  addCart : boolean;
  products : any[];
  userId:any;

  ionViewDidLoad() {
    
    this.storage.get('userId').then((res)=>{
      this.userId = res;
    });
    console.log('ionViewDidLoad ProductsPage');
    this.getProducts();
  }

  getProducts(){
    var cid = this.navParams.get('categoryId');
    this.srvProduct.getProducts(cid)
      .subscribe(res=>{
        console.log(res.json());
        this.products = res.json();
        
      });
  }

  addToCart(pid){
    this.srvProduct.addToCart(pid, this.userId).subscribe(res => {
        console.log(res.json());
        if(res.json().addCart == true){
          this.addCart = true;
          this.makeToast("Product Added to Cart");
          
        }else{
          this.addCart = false;
        }
    });

  }


  showCart(){
    this.navCtrl.push(ShowCartPage);
  }

  makeToast(message:string){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }



}

import { LoginPage } from './../login/login';
import { UserProvider } from './../../providers/user/user';
import { User } from './../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private srvUser: UserProvider,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(_user) {
    this.user = _user;
    console.log("USER FROM COMPONENT:");
    console.log(this.user);
    this.srvUser.register(this.user)
      .subscribe(res => {
        if(res.json().registerSuccess == true){
          this.makeToast("User Registered Successfully.");
          this.navCtrl.push(LoginPage);
        }else{
          this.makeToast("User occured while creating user.");
        }
      });
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

import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formgroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private srvUser:UserProvider,
    private formbuilder:FormBuilder,
    private toastCtrl: ToastController,
    private storage : Storage
    ) {


    // this.formgroup = formbuilder.group({

    //   email: ['', Validators.required],
    //   password: ['', Validators.required],

    // });


    // this.email = this.formgroup.controls['email'];
    // this.password = this.formgroup.controls['password'];
      

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user){
    this.srvUser.login(user)
      .subscribe(res=>{
        if(res.json().loginSuccess==true){
          this.storage.set('userId',res.json().userId);
          this.storage.set('userName',res.json().userName);
          this.navCtrl.push(HomePage);
        }
        else{
          // this.navCtrl.push(LoginPage);
          this.makeToast("Please check your username or password.");
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

  reg(){
    this.navCtrl.push(RegisterPage);
  }
}

import { UserService } from './../services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  doRegister: boolean;
  loginFailed: boolean;
  constructor(private srvUser: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(user) {
    this.srvUser.registerUser(user)
      .subscribe(response => {
        if (response.json().registerSuccess == true) {
          this.doRegister = true;
        }
        console.log(response.json());
      });
    setTimeout(() => {
      this.doRegister = false;
    }, 3000);
  }

  login(user) {
    if (user!=null){
    this.srvUser.loginUser(user)
      .subscribe(res => {
        if (res.json().loginSuccess == true) {
          localStorage.setItem('Name', res.json().userName);
          localStorage.setItem('UserID', res.json().userId);
          this.router.navigate(['/']);
        } else {
          this.loginFailed = true;
          setTimeout(() => {
            this.loginFailed = false;
          }, 3000)
        }
      });
    }
  }

}

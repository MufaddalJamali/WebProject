import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;
  constructor(private route : Router) { }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
    this.userLoggedIn = false;
    this.route.navigate(['/']);
  }

}

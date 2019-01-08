import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { StorageServiceModule } from 'angular-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    LoginSignupComponent,

  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'cart', component:CartComponent},
      {path:'contact', component:ContactUsComponent},
      {path:'loginsignup',component: LoginSignupComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

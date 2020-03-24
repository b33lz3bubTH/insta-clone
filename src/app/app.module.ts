import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserspostComponent } from './userspost/userspost.component';
import { AppRoutingModule } from './app-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FooterComponent } from './footer/footer.component';
import { UserauthComponent } from './userauth/userauth.component';
import { LoginComponent } from './userauth/login/login.component';
import { RegisterComponent } from './userauth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserspostComponent,
    UserprofileComponent,
    HomecomponentComponent,
    FooterComponent,
    UserauthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

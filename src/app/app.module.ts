import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserspostComponent } from './userspost/userspost.component';
import { AppRoutingModule } from './app-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FooterComponent } from './footer/footer.component';

import { UserAuthModule } from './userauth/userauth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserspostComponent,
    UserprofileComponent,
    HomecomponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

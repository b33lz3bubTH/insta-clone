import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserspostComponent } from './userspost/userspost.component';
import { AppRoutingModule } from './app-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FooterComponent } from './footer/footer.component';

import { UserAuthModule } from './userauth/userauth.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { SearchPageComponent } from './search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserspostComponent,
    UserprofileComponent,
    HomecomponentComponent,
    FooterComponent,
    CreatePostComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { UserauthComponent } from './userauth/userauth.component';
import { LoginComponent } from './userauth/login/login.component';
import { RegisterComponent } from './userauth/register/register.component';


const appRoutes: Routes = [
    { path: '', component: HomecomponentComponent, pathMatch:'full' },
    { path: 'profile', component: UserprofileComponent },
    { path: 'userauth', component: UserauthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';



const appRoutes: Routes = [
    { path: '', component: HomecomponentComponent, pathMatch:'full' },
    { path: 'profile', component: UserprofileComponent }
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

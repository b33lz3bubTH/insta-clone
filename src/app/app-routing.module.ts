import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { CreatePostComponent } from './create-post/create-post.component';



const appRoutes: Routes = [
    { path: '', component: HomecomponentComponent, pathMatch:'full' },
    { path: 'profile', component: UserprofileComponent },
    { path: 'new-post', component: CreatePostComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

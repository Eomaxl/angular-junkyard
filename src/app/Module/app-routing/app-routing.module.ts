import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../../../Components/home/home.component';
import { AboutComponent } from './../../../Components/about/about.component';
import { BlogComponent } from './../../../Components/blog/blog.component';
import { UsersComponent } from './../../../Components/users/users.component';
import { UserDetailsComponent } from './../../../Components/user-details/user-details.component';
import { PlaceHolderComponent } from './../../../Components/place-holder/place-holder.component';

const appRoutes: Routes =[
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog',component: BlogComponent },
  { path:'users',component: UsersComponent, children:[
    {path:':id',component:UserDetailsComponent}, {path:'',component:PlaceHolderComponent}]},
  { path: '**', component:HomeComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
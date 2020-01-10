import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  { HelloComponent } from './../Components/Binding/hello/hello.component';
import { AppComponent } from './app.component';

import { PlaceHolderComponent } from './../Components/place-holder/place-holder.component';
import { HeaderComponent } from './../Components/header/header.component';
import { FooterComponent } from './../Components/footer/footer.component';
import { StringInterpolationComponent } from './../Components/Binding/string-interpolation/string-interpolation.component';
import { DataBindingComponent } from './../Components/Binding/data-binding/data-binding.component';
import { EventBindingComponent } from './../Components/Binding/event-binding/event-binding.component';
import { CounterActionsComponent } from './../Components/Binding/counter-actions/counter-actions.component';
import { TwoWayBindingComponent } from './../Components/Binding/two-way-binding/two-way-binding.component';
import { HomeComponent } from './../Components/home/home.component';
import { BlogComponent } from './../Components/blog/blog.component';
import { AboutComponent } from './../Components/about/about.component';
import  { AppRoutingModule } from './Module/app-routing/app-routing.module';
import  { UsersComponent } from './../Components/users/users.component';
import { UserDetailsComponent } from './../Components/user-details/user-details.component';
import { UserComponent } from './../Components/user/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent , FooterComponent, StringInterpolationComponent,DataBindingComponent, EventBindingComponent, CounterActionsComponent, TwoWayBindingComponent, HomeComponent, BlogComponent, AboutComponent,UserComponent, UsersComponent, UserDetailsComponent,PlaceHolderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

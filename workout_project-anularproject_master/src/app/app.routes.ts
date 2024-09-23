import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { DashbardComponent } from './dashbard/dashbard.component';

export const routes: Routes = [
    {path:'sign-up',component:SignUpComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashbardComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './AuthGuard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // default route
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent  },
  {path:"cart",component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

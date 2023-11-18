import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  PATH = "assets/logo.png";
  errorMessage = ''; // Initialize the error message property to an empty string
  pathback ="assets/back sign in.webm";
  email =""
  password ="";

  constructor(
    private authService: AuthService,
    private Router: Router
  ) {}



  // Add a getter to make it easier to access form controls in the HTML template




  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response:any) => {
          if (response.ok) {
            this.authService.isAuthenticated=true;
            this.Router.navigateByUrl('/home');
          
        } else {
          console.log(response);

            // Set the error message property to display the appropriate message
            this.errorMessage = 'Invalid username or password';
          }
        }
      );
  }
}

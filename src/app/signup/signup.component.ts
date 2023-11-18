import { Component } from '@angular/core';
import {SignupService} from  '../service/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
firstname="";
lastname="";
username="";
password="";
email="";
age=0;
signfail!: boolean;

  constructor(private signupService: SignupService) {}


signup() {

       
      
  this.signupService.signUp(this.firstname, this.lastname, this.username, this.email, this.password, this.age)
    .subscribe(
      (response: any) => {
        console.log(response);
        if (response.ok)
        {
          Swal.fire({
            icon: 'success',
            title: 'Your account created',
            text: 'User regestered.',

          })  
        }
       
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error.',
            footer: '<a href="">Why do I have this issue?</a>'
          })  
         }

      },
      (error: any) => {
        console.error(error);
        console.log('An error occurred while registering the user');
      }
    );
}}




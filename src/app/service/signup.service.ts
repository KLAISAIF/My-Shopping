import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  signUp(firstname: string, lastname: string, username: string, email: string, password: string, age: number) {
    console.log(username);
    
       return this.http.post("http://localhost:3003/api/auth/signup", {firstName:firstname ,lastName:lastname,userName:username, email:email, password:password ,age:age });
  }

}
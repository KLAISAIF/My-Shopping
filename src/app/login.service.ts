import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false;
  constructor(private http: HttpClient) { }
  login(email: string, password: string){
    return this.http.post("http://localhost:3003/api/auth/login", { email: email, password: password })
    ;
  }

}
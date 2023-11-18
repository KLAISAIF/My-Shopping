import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService :AuthService ,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authenticationService.isAuthenticated;
    if (isAuthenticated) {
      return true;
    } else {
      // Redirect the user to the login page if they are not authenticated.
      this.router.navigateByUrl('/');
      return false;
    }
  }
}

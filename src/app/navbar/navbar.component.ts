import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServerService } from '../service/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
DreamShaper_v7_ecommerce_shopping_logo_0: any;
url= "C:/Users/lenovo/my_shoping/src/assets/DreamShaper.jpg"
constructor(private router:Router , private service : HomeServerService){

}
  ngOnInit(): void {
  }
goToCart(){
  this.router.navigateByUrl("/cart")
}
selectedValue: string = ''; 
filter(selectedValue:string){
this.service.selectedValue=selectedValue;
}
}

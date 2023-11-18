import { Component, OnInit } from '@angular/core';
import { HomeServerService } from '../service/home.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[]=[];

  constructor(private homeServerService: HomeServerService) { }
  ngOnInit(): void {
    this.getProducts();
    this.filterProducts();
  }

  getProducts() {
    this.homeServerService.getProducts().subscribe(
      products => {
       this.products= products;
      },
      
    );
    
}
filterProducts() {
  const products = this.products.slice();
 
  if (this.homeServerService.selectedValue === '') {
    this.products = products; 
  } else {
    console.log(this.homeServerService.selectedValue );
  
    this.products = products.filter((product) => {
      return product.cat_id === parseInt(this.homeServerService.selectedValue, 10);
    });
  }
}
}


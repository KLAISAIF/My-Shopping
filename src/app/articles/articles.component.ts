import { Component, Input, OnInit } from '@angular/core';
import { HomeServerService } from '../service/home.service';
import { Product } from '../models/product';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy{
  
  @Input() products:any; 
  product:Product | undefined;
  test:boolean=true;
  constructor(private service:HomeServerService){
  }
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.service.selectedValueObservable.subscribe(() => {
      this.filterProducts();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
 
  addtocart(product:Product){
    this.service.addToCart(product);
  }
  filterProducts() {
    const products = this.products.slice();
   
    if (this.service.selectedValue === '') {
      this.products = products; 
    } else {
      console.log(this.service.selectedValue );
    
      this.products = products.filter((product: { cat_id: number; }) => {
        return product.cat_id === parseInt(this.service.selectedValue, 10);
      });
    }
  }

}

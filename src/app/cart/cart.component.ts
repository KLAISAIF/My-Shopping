import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { HomeServerService } from '../service/home.service';
import { OrderSummary } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: OrderSummary = {
    totalItems: 5,
    totalCharges: 100,
    shippingCharges: 10,
    subTotal: 90
  };
  cart: Product[] = [];
  price : number  = 0;
  Total: number = 0;
  constructor(private Service :HomeServerService , private router : Router) {}

  ngOnInit(): void {
    this.cart = this.Service.getShoppingProducts();
    this.calculateTotalPrice();
    this.Total = this.price + 7 ;
    this.order.subTotal=this.price;
    this.order.shippingCharges=30;
    this.order.totalItems=this.cart.length;
    this.order.totalCharges= this.Total;
    this.Service.createOrder(this.order);
    
 }
  remove(product : Product):void{
    this.Service.removeFromCart(product);
    this.calculateTotalPrice();
    this.Total = this.price + 7 ;
  }
  calculateTotalPrice(): void {
    this.price = this.cart.reduce((total, product) => total + product.price, 0);
  }
  goToCheckout():void{

    this.router.navigateByUrl("/checkout");

  }
  backToHome():void{
    this.router.navigateByUrl("/home")
  }
}
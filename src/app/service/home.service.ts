import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { OrderSummary } from '../models/order';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeServerService {
  products: Product[] = [];
  productscart: Product[] = [];
  order: OrderSummary = {
    totalItems: 0,
    totalCharges: 0,
    shippingCharges: 0,
    subTotal: 0
  };
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3003/api/product/getAllProducts');
  }
  getShoppingProducts(){
    return this.productscart ;
  }
  addToCart(product : Product){
    this.productscart.push(product)
  }

  removeFromCart(product: Product) {
    const index = this.productscart.findIndex(p => p.id === product.id);
    if (index !== -1) {
        this.productscart.splice(index, 1);
    } else {
        console.error('Product not found in cart.');
    }
}
createOrder(order1 : OrderSummary){
  this.order= order1;
}
getOrder():OrderSummary{
  return this.order;
}



  private _selectedValue = new BehaviorSubject<string>('');

  get selectedValueObservable() {
    return this._selectedValue.asObservable();
  }

  get selectedValue(): string {
    return this._selectedValue.value;
  }

  set selectedValue(val: string) {
    this._selectedValue.next(val);
  }

}
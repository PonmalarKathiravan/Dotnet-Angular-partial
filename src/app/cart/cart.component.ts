import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart';
import { LoginService } from '../services/login.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  hasItems:boolean = false;
  cartItems:Cart[]=[];
  constructor(private cartService:CartService,private loginService:LoginService
    ,private router:Router) { }

  ngOnInit(): void {
      this.cartService.setid(this.loginService.userId);
      this.cartService.getCart().subscribe(data => {
        this.cartItems = data;
        this.checkLength();
        console.log(this.cartItems);
      })
  }

  checkLength() {
    if(this.cartItems.length>0) {
      this.hasItems = true;
    }
  }

  deleteCart(id:String){  
      this.cartService.delete(id).subscribe(()=>{
        this.router.navigate(['cart']);
      });
  }

  placeOrder(){
    this.cartService.placeOrder(this.loginService.userId).subscribe(()=>{
      this.router.navigate(['cart']);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Productmodel } from 'src/app/model/productmodel';
import { map } from 'rxjs/operators';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductDetailService } from './product-detail.service';
import { LoginService } from 'src/app/services/login.service';
import { CartService } from 'src/app/cart/cart.service';
import { Ordermodel } from 'src/app/model/ordermodel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products : Productmodel[] | undefined;
  order:Ordermodel = new Ordermodel;
  // products:any;
  id: string | undefined;
  userQuantity:Number = 1;
  userEmail:any;
  constructor(private productListService: ProductListService, private route: ActivatedRoute,
    private productDetailService:ProductDetailService,private router:Router
    ,private loginService:LoginService,private cartService:CartService) { 
    this.getAllProducts(); 
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          // console.log(this.id);
        }
      );
  }

  public getAllProducts() {
    this.productListService.getProduct()
    // .pipe(map(responseData => {
    //   const productsArray = [];
    //   for(const key in responseData) {
    //     if(responseData.hasOwnProperty(key)) {
    //       productsArray.push( { responseData[key],id: key })
    //     }
    //   }
    //   return productsArray;
    // }))
    .subscribe(data => {
      
      this.products = data;
      // console.log(this.products);
    });
  }

  addToCart(){

    console.log(this.userQuantity);
    this.productDetailService.setid(this.id);
    this.userEmail = this.loginService.userId;
    console.log(this.userEmail);
    
    this.productDetailService.addCart(this.userQuantity+"",this.userEmail).subscribe(()=>this.router.navigate(['home']));
  }

  addToOrder(name:any,price:any){
    this.order.userId = this.loginService.userId;
    this.order.productName = name;
    this.order.price = price;
    this.order.Status = "not delivered";
    this.order.quantity = this.userQuantity;
    console.log(this.order);
    this.productDetailService.placeOrder(this.order).subscribe(()=>{
      this.router.navigate(['orders']);
    })
  }


}

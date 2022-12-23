import { Component, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/model/productmodel';
import { map } from 'rxjs/operators';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  products:Productmodel[] | undefined;

  constructor(private productListService:ProductListService) { 
    this.getAllProducts();   
  }

  ngOnInit(): void {
    
  }

  public getAllProducts() {
    this.productListService.getProduct()
    .pipe(map(responseData => {
      const productsArray = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          productsArray.push( { ...responseData[key] })
        }
      }
      return productsArray;
    }))
    .subscribe(data => {
      // console.log(data);
      this.products = data;
    });

    // console.log(this.products[0].productName);
  }

}

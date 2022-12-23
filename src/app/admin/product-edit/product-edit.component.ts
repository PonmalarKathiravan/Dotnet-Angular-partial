import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Productmodel } from 'src/app/model/productmodel';
import { ProducteditService } from 'src/app/services/productedit.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // getProduct:Productmodel;
  // product:Productmodel=new Productmodel;
  productEdit:Productmodel=new Productmodel;
  productId:any;
  product: any;
  productname:any;
  price:any;
  description:any;
  url:any;
  quantity:any;
  constructor(private producteditService:ProducteditService,private router:Router) { 
  }
  dataStore(){
    this.producteditService.getProduct().subscribe((data) => {
      this.productId = data.productId;
      this.product = data;
      this.productname = data.productName;
      this.price = data.price;
      this.description = data.description;
      this.url=data.imageUrl;
      this.quantity = data.quantity;
    });
    
  }
  submitForm(){
    this.productEdit.productId = this.productId;
    this.productEdit.productName = this.productname;
    this.productEdit.price = this.price;
    this.productEdit.imageUrl= this.url;
    this.productEdit.quantity = this.quantity;
    this.productEdit.description = this.description;
    this.producteditService.save(this.productEdit).subscribe(()=> this.router.navigate(['admin']));
  }
  ngOnInit(): void {
    this.dataStore();

  }

}

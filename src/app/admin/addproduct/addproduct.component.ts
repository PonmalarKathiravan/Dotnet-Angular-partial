import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productmodel } from 'src/app/model/productmodel';
import { AddproductService } from 'src/app/services/addproduct.service';
import{NgForm} from '@angular/forms'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product:Productmodel = new Productmodel;
  
  constructor(private addproductService: AddproductService,public router:Router) { }
  ngOnInit(): void {
  }

  addproduct(form:NgForm,name:String,price:String,description:String,url:String,quantity:any){
    this.product.productId = "0";
    this.product.productName = name;
    this.product.price = price;
    this.product.description = description;
    this.product.imageUrl = url;
    this.product.quantity = +quantity;
    console.log(this.product);
    
    this.addproductService.save(this.product).subscribe(()=>this.gotoaddProduct());
  }
  gotoaddProduct(){
    this.router.navigate(['admin']);
  }
}

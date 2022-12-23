import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productmodel } from 'src/app/model/productmodel';
import { ProductService } from 'src/app/services/product.service';
import { ProductdeleteService } from 'src/app/services/productdelete.service';
import { ProducteditService } from 'src/app/services/productedit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productId:String="";

  productList:Productmodel[]=[];
  constructor(private productService:ProductService,public router:Router,
    private producteditService:ProducteditService,private productDeleteService:ProductdeleteService) { }

  ngOnInit(): void {
      this.productService.getProduct().subscribe(data=>this.productList=data);
  }

  setId(s:any){
    console.log(s);
    
    this.producteditService.setid(s);
    
  }
  deleteId(a:any){
    console.log("called");
    this.productDeleteService.setid(a);
    this.productDeleteService.deleteProduct().subscribe(()=>this.router.navigate(['admin']));
  }
}

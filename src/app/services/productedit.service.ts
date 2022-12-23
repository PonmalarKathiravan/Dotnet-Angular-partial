import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productmodel } from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProducteditService {
  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  private apiUrl: string;
  productId:Observable<any> | undefined;
  productData:Observable<Productmodel> | undefined;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://8080-effddfdaeebcfacbdcbaeaceadebfeffeb.examlyiopb.examly.io/admin/productEdit/';
    
  }

  public getProduct():Observable<Productmodel>{
    console.log(this.productData);
    // return this.productData;
    return this.http.get<Productmodel>(this.apiUrl);
  }
  
  setid(data:any){
    this.productId = data;
    this.apiUrl = 'https://8080-effddfdaeebcfacbdcbaeaceadebfeffeb.examlyiopb.examly.io/admin/productEdit/'+this.productId;
  }

  public save(product:Productmodel){
    return this.http.post<Productmodel>(this.apiUrl,product);
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductdeleteService {

  private apiUrl: string;
  productId:any;
  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://8080-effddfdaeebcfacbdcbaeaceadebfeffeb.examlyiopb.examly.io/admin/delete/';
    
  }
  
  setid(data:any){
    this.productId = data;
    this.apiUrl = 'https://8080-effddfdaeebcfacbdcbaeaceadebfeffeb.examlyiopb.examly.io/admin/delete/'+this.productId;
  }


  public deleteProduct():Observable<String>{
      return this.http.get<String>(this.apiUrl);
  }
}

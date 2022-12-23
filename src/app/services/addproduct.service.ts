import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productmodel } from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  private apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://8080-effddfdaeebcfacbdcbaeaceadebfeffeb.examlyiopb.examly.io/admin/addProduct';
  }

  public save(product:Productmodel){
      return this.http.post<Productmodel>(this.apiUrl,product);
  }
}

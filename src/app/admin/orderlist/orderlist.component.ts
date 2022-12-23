import { Component, OnInit } from '@angular/core';
import { Ordermodel } from 'src/app/model/ordermodel';
import { OrderlistService } from './orderlist.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orderList:Ordermodel[] =[];

  constructor(private orderlistService:OrderlistService) { }

  ngOnInit(): void {
    this.orderlistService.getOrders().subscribe(data=>{
      this.orderList=data;
    });
  }

}

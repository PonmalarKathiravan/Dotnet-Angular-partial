import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginServices: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.loginServices.loginStatus = false;
    this.route.navigate(['login']);
  }

}

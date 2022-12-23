import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.css']
})
export class ClientNavComponent implements OnInit {

  constructor(private loginServices: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.loginServices.loginStatus = false;
    this.route.navigate(['login']);
  }

}

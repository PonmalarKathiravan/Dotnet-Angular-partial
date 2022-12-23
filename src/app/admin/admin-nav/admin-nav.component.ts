import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private loginServices: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.loginServices.loginStatus = false;
    this.route.navigate(['login']);
  }

}

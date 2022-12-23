import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/user-model';
import {SignupServiceService} from '../services/signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage = "";
  constructor(public router:Router,private signupService :SignupServiceService) { }

  ngOnInit(): void {
  }

  userData: UserModel = new UserModel;

  test(email:String,pass1:String,pass2:String,username:String,number:String){
    if(pass1 !== pass2){
      console.log(this.userData.active);
      this.errorMessage = "Password does not match";
    }else{
      this.userData.email = email;
      this.userData.username = username;
      this.userData.mobileNumber = number;
      this.userData.password = pass1;
      console.log(this.userData);
      this.signupService.save(this.userData).subscribe(() => this.gotoLogin());
      this.errorMessage = "";
    }
  }

  gotoLogin(){
    this.router.navigate(['']);
  }

}

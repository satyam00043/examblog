import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user = {
    username: '',
    email: '',
    password: ''
  };

  onSignup() {
    console.log("you have successfully login");
    // Handle signup logic here
    alert("you have successfully login");
  }
 
}

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
    return "you ar signup";
    // Handle signup logic here
  }
 
}

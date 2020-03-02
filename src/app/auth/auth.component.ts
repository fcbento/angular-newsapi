import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  public showSignin: boolean = true;
  public showSignup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onGoToSignUp() {
    this.showSignin = false;
    this.showSignup = true;
  }

  public onGoToSignIn() {
    this.showSignin = true;
    this.showSignup = false;
  }

}

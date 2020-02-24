import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import EmailValidator from '../../utils/email.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../auth.component.scss']
})
export class SignInComponent implements OnInit {
  
  public form: FormGroup;
  public signInType: boolean = true;
  public passwordDontMatch: boolean = false;
  public showSignType: boolean = true;
  public signInfo: string = '';
  public signAction: string = '';
  public signActionBtn: string = '';
  
  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EmailValidator())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    this.checkPage();
  }

  public onSignIn() {
    
  }

  public checkPage(){
    this.showSignType ? this.signInfo = 'Dont have an account?' : this.signInfo = 'Already have an account?';
    this.showSignType ? this.signAction = 'Sign Up now' : this.signAction = 'Sign In'
    this.showSignType ? this.signActionBtn = 'Sign In' : this.signActionBtn = 'Sign Up'

  }

  public signType(){
    this.showSignType = !this.showSignType;
    this.form.reset();
    this.checkPage();
  }

  public passwordsDontMatch (){
    
    if(this.form.value.password !== this.form.value.repassword){
      this.passwordDontMatch = !this.passwordDontMatch;
      return true
    }
  }


}

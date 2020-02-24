import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import EmailValidator from '../../utils/email.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../auth.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;
  public passwordDontMatch: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EmailValidator())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  public onSignup() {

    const email = this.form.value.email;
    const password = this.form.value.password;

    //this.authService.signupUser(email, password);

  }

  public passwordsDontMatch (){
    
    if(this.form.value.password !== this.form.value.repassword){
      this.passwordDontMatch = !this.passwordDontMatch;
      return true
    }
  }

}

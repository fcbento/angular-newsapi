import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import EmailValidator from '../../utils/email.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../auth.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  public showSignType: boolean = true;
  public signInfo: string = '';
  public signAction: string = '';
  public signActionBtn: string = '';

  constructor(public formBuilder: FormBuilder, public service: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EmailValidator())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.onCheckPage();
  }

  public onCheckPage(): void {
    this.showSignType ? this.signInfo = 'Dont have an account?' : this.signInfo = 'Already have an account?';
    this.showSignType ? this.signAction = 'Sign Up now' : this.signAction = 'Sign In'
    this.showSignType ? this.signActionBtn = 'Sign In' : this.signActionBtn = 'Sign Up'
  }

  public onSignType(): void {
    this.showSignType = !this.showSignType;
    this.form.reset();
    this.onCheckPage();
  }

  public onSign(): void {
    this.showSignType ? this.onSignIn() : this.onSignUp();
  }

  public onSignIn(): void {
    this.service.signinUser(this.form.value.email, this.form.value.password)
  }

  public onSignUp(): void {
    this.service.signupUser(this.form.value.email, this.form.value.password);
  }

}

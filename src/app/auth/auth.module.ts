import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../material/material.module';
import { HeadTitleComponent } from './head-title/head-title.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    HeadTitleComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from '../material/material.module';
import { HeadTitleComponent } from './head-title/head-title.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    HeadTitleComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

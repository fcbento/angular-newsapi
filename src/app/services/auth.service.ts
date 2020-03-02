import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router, public loader: LoaderService) { }

  public token: string;

  public signupUser(email: string, password: string): void {
    this.loader.show()
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      this.router.navigate(['/news']);
      this.loader.hide()
    }).catch((error) => {
      this.loader.hide()
      return error;
    });
  }

  public signinUser(email: string, password: string): Promise<any> {
    this.loader.show()
    let login = firebase.auth().signInWithEmailAndPassword(email, password).then(res => {

      this.router.navigate(['/news']);
      this.loader.hide()
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
        })
      return res;
    }).catch((error) => {
      this.loader.hide()
      return error;
    });

    return login;
  }

  public socialMediaAuth(media: string): void {
    this.loader.show();
    firebase.auth().signInWithPopup(this.getProvider(media)).then((result) => {
      this.token = result.credential['accessToken'];
      let user = result.user;
      this.router.navigate(['/news']);
      this.loader.hide();
    }).catch(function (error) {
      this.loader.hide()
      return error
    });
  }

  public getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  public logout(): void {
    firebase.auth().signOut();
    this.token = null;
  }

  public getProvider(provider: string): any {

    switch (provider) {
      case 'FACEBOOK':
        return new firebase.auth.FacebookAuthProvider();
      case 'GOOGLE':
        return new firebase.auth.GoogleAuthProvider();
      case 'TWITTER':
        return new firebase.auth.TwitterAuthProvider();
      case 'GITHUB':
        return new firebase.auth.GithubAuthProvider();
      default:
        break;
    }

  }

}

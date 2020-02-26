import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  public token: string;

  public signupUser(email: string, password: string): void {

    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      this.router.navigate(['/news']);
    }).catch((error) => {
      return error;
    });
  }

  public signinUser(email: string, password: string): Promise<any> {
    let login = firebase.auth().signInWithEmailAndPassword(email, password).then(res => {

      this.router.navigate(['/news']);

      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
        })
      return res;
    }).catch((error) => {
      return error;
    });

    return login;
  }

  public socialMediaAuth(media: string): void {
    firebase.auth().signInWithPopup(this.getProvider(media)).then((result) => {
      this.token = result.credential['accessToken'];
      let user = result.user;
      this.router.navigate(['/news']);
    }).catch(function (error) {
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

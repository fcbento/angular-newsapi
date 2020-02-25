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
      this.router.navigate(['/']);
    }).catch((error) => {
      return error;
    });
  }

  public signinUser(email: string, password: string): Promise<any> {

    let login = firebase.auth().signInWithEmailAndPassword(email, password).then(res => {

      //this.router.navigate(['']);

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

    let provider: any;

    switch (media) {
      case 'FACEBOOK':
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'GOOGLE':
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'TWITTER':
        provider = new firebase.auth.TwitterAuthProvider();
        break;
      case 'GITHUB':
        provider = new firebase.auth.GithubAuthProvider();
        break;
      default:
        break;
    }

    firebase.auth().signInWithPopup(provider).then(function (result) {
      let token = result.credential['accessToken'];
      let user = result.user;
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

}

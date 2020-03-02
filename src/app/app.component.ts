import { Component, OnInit  } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapi';

  constructor() {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDijS2TO1E3qruNuQ26vTaIyUavGlHUxvs",
      authDomain: "newsapi-a01e6.firebaseapp.com"
    });
  }
}

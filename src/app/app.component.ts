import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ssid: string;
  password: string;
  loading = false;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  postCreds(ssid = this.ssid, password = this.password) {
    this.loading = true;
    this.http.post(
      'http://localhost:8080/do-things',
      {
        ssid,
        password
      }
      ).pipe(
        take(1)
      ).subscribe(
        () => {
          this.loading = false;
         },
         () => {
          this.loading = false;
         }
      );
  }
}

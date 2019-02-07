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
      'http://localhost:8080',
      {
        ssid,
        password
      }
      ).pipe(
        take(1)
      ).subscribe(
        () => {
          this.snackBar.open('Successfully submitted', '', {
            duration: 2000
          });
          this.loading = false;
        },
        () => {
          this.snackBar.open('An error occured', '', {
            duration: 2000
          });
          this.loading = false;
        }
      );
  }
}

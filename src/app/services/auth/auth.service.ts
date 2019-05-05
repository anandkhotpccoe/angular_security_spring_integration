import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { authUrl } from "../../common/url";
import { Observable } from "rxjs";
@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private http: HttpClient) {}

  signupUser(data: object): Observable<any> {
    return this.http.post(`${authUrl}signup`, data);
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(error => console.log(error));
  }

  signinUser(data: object): Observable<any> {
    return this.http.post(`${authUrl}signin`, data);

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(response => {
    //     this.router.navigate(["dashboard"]);
    // firebase
    //   .auth()
    //   .currentUser.getToken()
    //   .then((token: string) => (this.token = token));
    // })
    // .catch(error => console.log(error));
  }

  logout() {
    this.token = null;
    localStorage.removeItem("accessToken");
    this.router.navigate(["/signin"]);
  }

  getToken() {
    // firebase
    //   .auth()
    //   .currentUser.getToken()
    //   .then((token: string) => (this.token = token));
    //return this.token;
  }

  isAuthenticated() {
    this.token = localStorage.getItem("accessToken");
    return this.token != null;
  }
}

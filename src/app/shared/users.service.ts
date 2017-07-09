/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

  private clientId: string;
  private clientSecret: string;
  constructor(private http: Http) {
    this.clientId = "ResecApp";
    this.clientSecret = "ResecSecret";
  }
  login(server, username, password): Observable<any> {
    const LoginUrl = 'http://' + server + ':4580/api/users/login';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    var data = "grant_type=password&username=" + username + "&password=" + password;
    data = data + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret;

    return this.http.post(LoginUrl, data, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }
}



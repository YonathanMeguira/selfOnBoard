/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

  constructor(private http: Http) { }
  login(server, username, password): Observable<any> {
    const LoginUrl = 'http://' + server + ':4580/api/users/login';
    return this.http.post(LoginUrl, { username, password })
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }
}

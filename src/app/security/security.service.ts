import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SecurityService {
  server = localStorage.getItem('serverName');
  constructor(private http: Http) { }
  getSettings(): Observable<any> {
    const settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policy?q=1';
    return this.http.get(settingsUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get services'));
  }
}

/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */

import {Injectable} from '@angular/core';
import {HttpService} from '../shared/custom-http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class MailService {

  server = localStorage.getItem('serverName');
  token = localStorage.getItem('token');

  constructor(private http: HttpService) {
  }

  searchMails(query): Observable<any> {
    const searchUrl = 'http://' + this.server + ':4580/sob/api/emails/search?q=1';
    return this.http.get(searchUrl, {search: query})
      .map((res) => {
        console.log(res);
        return (res.json());
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve mails'));
  }

  performAction(selection, action): Observable<any> {
    const actionUrl = 'http://' + this.server + ':4580/sob/api/emails/performAction/?actionName=' + action;
    return this.http.post(actionUrl, selection)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error, could not perform the action'));
  }

}

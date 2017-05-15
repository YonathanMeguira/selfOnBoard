import {Injectable} from '@angular/core';
import {HttpService} from '../shared/token.injector';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DashboardService {
  server = localStorage.getItem('serverName');

  constructor(private http: HttpService) {
  }
  GetDashboardData(): Observable<any> {
    const dashboardUrl = 'http://' + this.server + ':4580/sob/api/dashboard';
    return this.http.get(dashboardUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the  dashboard data'));
  }

  GetRandomSenders(): Observable<any> {
    const randomSenders = 'https://api.myjson.com/bins/11ccy1';
    return this.http.get(randomSenders)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Sorry we could not fetch the fake data for senders'));
  }
  GetRandomRecipients(): Observable<any> {
    const randomRecipients = 'https://api.myjson.com/bins/seuvd';
    return this.http.get(randomRecipients)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Sorry we could not fetch the fake data for senders'));
  }

}

import {Injectable} from '@angular/core';
import {HttpService} from '../shared/custom-http';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class DashboardService {
  server = localStorage.getItem('serverName');

  constructor(private http: HttpService, private regularHttp: Http) {
  }

  getDashboardData(timeFrame: number): Observable<any> {
    const servername = localStorage.getItem('serverName');
    const dashboardUrl = 'http://' + servername + ':4580/sob/api/dashboard?timeFrame=' + timeFrame;
    return this.http.get(dashboardUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the  dashboard data'));
  }

  GetRandomRecipients(): Observable<any> {
    const randomRecipients = 'https://api.myjson.com/bins/seuvd';
    return this.http.get(randomRecipients)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Sorry we could not fetch the fake data for senders'));
  }

  GetFeed(): Observable<any> {
    const feedUrl = 'http://content.guardianapis.com/search?show-fields=all&q=cybersecurity&api-key=d9837304-6676-41b2-ad98-9e89fe52dd5d'
    return this.regularHttp.get(feedUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Sorry we could not fetch the news'));
  }
}

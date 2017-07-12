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

  GetFeed(): Observable<any> {
    const header = new Headers();
    header.append('Access-Control-Request-Headers', 'Content-Type');
    const feedUrl = 'https://cyber-news-scrapr.herokuapp.com/news';
    return this.regularHttp.get(feedUrl, header)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Sorry we could not fetch the news'));
  }
}

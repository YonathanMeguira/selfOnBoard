import {Injectable} from '@angular/core';
import {HttpService} from '../shared/token.injector';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DashboardService {
  server = localStorage.getItem('serverName');

  constructor(private http: HttpService) {
  }

  getDashboardData(): Observable<any> {
    const dashboardUrl = 'http://' + this.server + ':4580/sob/api/dashboard';
    return this.http.get(dashboardUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the  dashboard data'));
  }
}

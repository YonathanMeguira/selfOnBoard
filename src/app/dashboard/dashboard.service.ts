import { Injectable } from '@angular/core';
import {HttpService} from '../shared/token.injector';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DashboardService {
  constructor(private http: HttpService) { }

  GetDashboardData(): Observable<any> {
    const dummyData = 'https://api.myjson.com/bins/1fd769';
    return this.http.get(dummyData)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the dummy dashboard data'));
  }
}

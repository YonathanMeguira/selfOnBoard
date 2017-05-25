import {Injectable} from '@angular/core';
import {HttpService} from '../shared/custom-http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SecurityService {
  server = localStorage.getItem('serverName');

  constructor(private http: HttpService) {
  }

  getSettings(): Observable<any> {
    const settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policy?q=1';
    return this.http.get(settingsUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get shared'));
  }

  saveSettings(settings): Observable<any> {
    const saveSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicy';
    return this.http.post(saveSettings, settings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not save settings'));
  }

  GetPolicyExceptionsSettings(): Observable<any> {
    const settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policyExceptions?q=1';
    return this.http.get(settingsUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get shared'));
  }
  deletePolicyExceptionSettings(settings): Observable<any> {
    const deleteSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/deletepolicyexceptions';
    return this.http.post(deleteSettings, settings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not save settings'));
  }

  savePolicyExceptionSettings(settings): Observable<any> {
    const url = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicyexceptions';
    return this.http.post(url, settings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not save settings'));
  }

}

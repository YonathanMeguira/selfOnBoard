/**
 * Created by if_found_call_0586288454 on 08/05/2017 ap. J.-C..
 */
import {Injectable, Component} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ResponseHandlerService} from './response-handler.service';



@Injectable()
export class HttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions, private responseHandler: ResponseHandlerService) {
    super(backend, options);
    const token = localStorage.getItem('token'); // your custom token getter function here
    options.headers.set('Authorization', token);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const token = localStorage.getItem('token');
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', token);
    } else {
      // we have to add the token to the url object
      url.headers.set('Authorization', token);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated => token has gone;

        console.log(self);
        this.responseHandler.handle401Error();
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}

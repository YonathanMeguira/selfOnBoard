import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ResponseHandlerService} from './response-handler.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class HTTPStateService {
  private getCallInTheProcessSource = new Subject<boolean>();
  getCallInTheProcess$ = this.getCallInTheProcessSource.asObservable();
  setGetState(inProcess: boolean) {
    this.getCallInTheProcessSource.next(inProcess);
  }
};

@Injectable()
export class HttpService extends Http {

  GetCallInProcess = false;
  subscription: Subscription;

  constructor(backend: XHRBackend, options: RequestOptions,
              private responseHandler: ResponseHandlerService,
              private httpState: HTTPStateService) {
    super(backend, options);
    const token = localStorage.getItem('token'); // your custom token getter function here
    options.headers.set('Authorization', token);
    this.subscription = httpState.getCallInTheProcess$.subscribe(
      state => {
        this.GetCallInProcess = state;
      }
    );
  }

  private showLoader(): void {
    this.httpState.setGetState(true);
  }

  // methods to intercept get calls
  private onEnd() {
    this.hideLoader();
    this.httpState.setGetState(false);
  };

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response): Response {
    return res;
    // make something special when it has finished retrieving the values
  }

  private onError(error: any): void {
    console.log(error);
    // make something special when finished loading
  }

  private hideLoader(): void {
    console.log('Hide loader');
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.showLoader();
    return super.get(url, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });
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

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
  private getProtocolStateSource = new Subject<boolean>();
  private postProtocolStateSource = new Subject<boolean>();
  getProtocolState$ = this.getProtocolStateSource.asObservable();
  postProtocolState$ = this.postProtocolStateSource.asObservable();

  setGetState(inProcess: boolean) {
    this.getProtocolStateSource.next(inProcess);
  }

  setPostState(inProcess: boolean) {
    this.postProtocolStateSource.next(inProcess);
  }
}
;

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
    this.subscription = httpState.getProtocolState$.subscribe(
      state => {
        this.GetCallInProcess = state;
      }
    );
  }

  private showGetLoader(): void {
    this.httpState.setGetState(true);
  }

  // methods to intercept get calls
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response): Response {
    return res;
    // make something special for each retrieved value
  }

  private onError(error: any): void {
    console.log(error);
    // make something special on error
  }

  private hideGetLoader(): void {
    this.httpState.setGetState(false);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
  //  this.showGetLoader();
    return super.get(url, options)
      .catch(this.onCatch)
      .do((res: Response) => {
       this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.hideGetLoader();
      });
  }

  private showPostLoader() {
    console.log('begining');
    this.httpState.setPostState(true);
  }

  private hidePostLoader() {
    console.log('finished');
    this.httpState.setPostState(false);
  }

  post(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
    this.showPostLoader();
    return super.post(url, data, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.hidePostLoader();
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



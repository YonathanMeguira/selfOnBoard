import {Injectable} from '@angular/core';
import {HttpService} from '../shared/custom-http';
import {Observable} from 'rxjs/Rx';
import {Policy} from "../model/company-policy";

@Injectable()
export class SecurityService {
  server = localStorage.getItem('serverName');

  constructor(private http: HttpService) {
  }

  getSettings(): Observable<any> {
    const settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policy?q=1';
    return this.http.get(settingsUrl)
      .map(
        (res) => {
          let json = res.json();
          let policy = new Policy();
          policy.AttachmentsProcessedLevels =
            {
              documents : json.AttachementsProcessedLevels['Documents'], spreadsheets : json.AttachementsProcessedLevels['Spreadsheets'], images : json.AttachementsProcessedLevels['Images'], presentations : json.AttachementsProcessedLevels['Presentations']
          };

          policy.AttachmentsWithoutCdr =
            {
              videoSound : json.AttachementsWithoutCdr['Video/Sound'], applicationsScripts : json.AttachementsWithoutCdr['Applications/Scripts'], unrecognizedFiles : json.AttachementsWithoutCdr['Unrecognized Files']
            };

          policy.selectedSafeLinksOperation = json.SelectedSafeLinksOperation;
          policy.exceptions = json.Exceptions;
          policy.handleLinks = json.HandleLinks ? 1 : 0;
          policy.policyId = json.PolicyId;
          policy.policyName = json.PolicyName;
          policy.useAntiviruses = json.UseAntiviruses;
          policy.SpecialAttachments.signedDocuments = json.SpecialAttachments['Password Protected'];
          policy.SpecialAttachments.passwordProtected = json.SpecialAttachments['Signed Documents'];

          return policy;
        }
      )
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get shared'));
  }

  saveSettings(policy:Policy): Observable<any> {
    var json = {
      'AttachementsProcessedLevels': {
        'Documents': policy.AttachmentsProcessedLevels.documents,
        'Spreadsheets': policy.AttachmentsProcessedLevels.spreadsheets,
        'Images': policy.AttachmentsProcessedLevels.images,
        'Presentations': policy.AttachmentsProcessedLevels.presentations
      },
      'AttachementsWithoutCdr':{
        'Video/Sound':policy.AttachmentsWithoutCdr.videoSound,
        'Applications/Scripts':policy.AttachmentsWithoutCdr.applicationsScripts,
        'Unrecognized Files':policy.AttachmentsWithoutCdr.unrecognizedFiles
      },
      'SpecialAttachments':{
        'Password Protected':policy.SpecialAttachments.passwordProtected,
        'Signed Documents':policy.SpecialAttachments.signedDocuments
      },
      'SelectedSafeLinksOperation':policy.selectedSafeLinksOperation,
      'Exceptions':policy.exceptions,
      'HandleLinks':policy.handleLinks ? true:false,
      'PolicyId':policy.policyId,
      'PolicyName':policy.policyName,
      'UseAntiviruses':policy.useAntiviruses
    };

    const saveSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicy';
    return this.http.post(saveSettings, json)
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

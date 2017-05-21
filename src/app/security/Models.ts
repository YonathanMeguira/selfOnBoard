/**
 * Created by if_found_call_0586288454 on 27/04/2017 ap. J.-C..
 */

class Cdr {
  Documents: number;
  Images: number;
  Spreadsheets: number;
  Presentations: number;
}


export class NewSettingsModel {
  AttachementsProcessedLevels: Cdr;
  AttachementsWithoutCdr: object;
  PolicyName: string;
  Exceptions?: Array<string>;
}

export class ExistingSettingsModel {
  AttachementsProcessedLevels: Cdr;
  AttachementsWithoutCdr: any;
  SpecialAttachments: any;
  PolicyName: string;
  Exceptions?: Array<string>;
  PolicyId?: number;
  HandleLinks?: boolean;
  UseAntiviruses?: boolean;
}

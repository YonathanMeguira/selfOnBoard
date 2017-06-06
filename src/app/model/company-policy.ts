export class AttachmentsProcessedLevels {
  documents: number;
  spreadsheets: number;
  images: number;
  presentations: number;
}

export class AttachmentsWithoutCdr {
  videoSound: number;
  applicationsScripts: number;
  unrecognizedFiles: number;
}

export class SpecialAttachments {
  passwordProtected: number;
  signedDocuments: number;
}

export class Policy {
  policyId: number;
  policyName: string;
  exceptions: string[];
  useAntiviruses: boolean;
  handleLinks: number;
  selectedSafeLinksOperation: number;
  AttachmentsProcessedLevels: AttachmentsProcessedLevels;
  AttachmentsWithoutCdr: AttachmentsWithoutCdr;
  SpecialAttachments: SpecialAttachments;
  Exceptions: string[];

  defaultAttachmentsWithoutCdr: AttachmentsWithoutCdr = {
    videoSound: Severity.Highest,
    applicationsScripts: Severity.Highest,
    unrecognizedFiles: Severity.Highest,
  };

  defaultAttachmentsProcessedLevels: AttachmentsProcessedLevels = {
    documents: Severity.Highest,
    spreadsheets: Severity.Highest,
    images: Severity.Highest,
    presentations: Severity.Highest
  };

  defaultSpecialAttachments: SpecialAttachments = {
    passwordProtected: Severity.High,
    signedDocuments: Severity.Highest
  };

  constructor() {
    this.AttachmentsWithoutCdr = new AttachmentsWithoutCdr();
    this.AttachmentsProcessedLevels = new AttachmentsProcessedLevels();
    this.SpecialAttachments = new SpecialAttachments();
    this.resetToDefault();
  }

  resetToDefault() {
    this.selectedSafeLinksOperation = HyperLinks.TestHyperlinks;
    this.AttachmentsWithoutCdr = JSON.parse(JSON.stringify(this.defaultAttachmentsWithoutCdr));//Object.assign({}, this.defaultAttachmentsWithoutCdr);
    this.AttachmentsProcessedLevels = JSON.parse(JSON.stringify(this.defaultAttachmentsProcessedLevels));//Object.assign({}, this.defaultAttachmentsProcessedLevels);
    this.SpecialAttachments = JSON.parse(JSON.stringify(this.defaultSpecialAttachments));//Object.assign({}, this.defaultSpecialAttachments);
    this.handleLinks = 1;
  }
}

enum HyperLinks {
  FixHyperlinks = 1,
  TestHyperlinks = 2,
  KillHyperlinks = 3
}

enum Severity {
  High = 0,
  Highest = 1
}

export class ExceptionsModel extends Policy {
 // exceptions: string[];

  constructor() {
    super();
  }
}









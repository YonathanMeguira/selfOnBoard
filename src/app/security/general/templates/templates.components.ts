import {Component, DoCheck, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {
  AttachmentsProcessedLevels, AttachmentsWithoutCdr, Policy,
  SpecialAttachments
} from "../../../model/company-policy";

@Component({
  selector: 'general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsComponent {
  @Input()
  generalSettings: Policy;

  constructor(private changeDetection: ChangeDetectorRef) {
  }

}
@Component({
  selector: 'general-with-cdr',
  templateUrl: './with-cdr.component.html',
  styleUrls: ['../general.component.css']

})
export class GeneralSettingsWithCDRComponent{

  @Input()
  generalSettings: Policy;

  constructor() {
  }
}

@Component({
  selector: 'general-without-cdr',
  templateUrl: './without-cdr.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsWithoutCDRComponent {
  // _noCdrSettings: AttachmentsWithoutCdr;
  //
  // @Input()
  // set noCdrSettings(settings: any) {
  //   this._noCdrSettings = settings;
  // }

  @Input()
  generalSettings: Policy;

  @Input() specialAttachmentSettings: SpecialAttachments;

  constructor() {
  }
}

@Component({
  selector: 'special-attachments',
  templateUrl: './special-attachements.html',
  styleUrls: ['../general.component.css']
})

export class SpecialAttachmentsComponent {
  @Input()
  specialAttachmentsSettings: any;

  constructor() {
  }

}

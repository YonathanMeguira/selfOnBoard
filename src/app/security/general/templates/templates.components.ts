import {Component, DoCheck, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsComponent {
  @Input()
  generalSettings: any;

  constructor(private changeDetection: ChangeDetectorRef) {
  }


  restoreDefaultGeneralSettings = () => {
    this.generalSettings.UseAntiviruses = true;
    this.generalSettings.HandleLinks = true;
    // this.changeDetection.detectChanges();
  }
}
@Component({
  selector: 'general-with-cdr',
  templateUrl: './with-cdr.component.html',
  styleUrls: ['../general.component.css']

})
export class GeneralSettingsWithCDRComponent implements DoCheck {

  @Input()
  cdrSettings: any;
  oldCdr: any = this.cdrSettings;
  isUndefined = () => {
    return isNullOrUndefined(this.oldCdr);
  }

  constructor() {
  }

  ngDoCheck() {
    if (!(this.isUndefined()) && (this.oldCdr !== this.cdrSettings)) {
      console.log('had changed');
      console.log(this.isUndefined());
    }
  }

  restoreDefaultCdr = () => {
    this.cdrSettings.Documents = 2;
    this.cdrSettings.Images = 2;
    this.cdrSettings.Presentations = 2;
    this.cdrSettings.Spreadsheets = 2;
  }
}

@Component({
  selector: 'general-without-cdr',
  templateUrl: './without-cdr.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsWithoutCDRComponent {
  @Input() noCdrSettings: any;
  @Input() specialAttachmentSettings: any;
  defaultNoCdr = {'Unrecognized Files': 0, 'Video/Sound': 0, 'Applications/Scripts': 0};

  constructor() {
  }

  restoreDefaultNoCdr = () => {
    this.noCdrSettings = this.defaultNoCdr;
    this.specialAttachmentSettings['Password Protected'] = 0;
    // this.noCdrSettings['Applications/Scripts'] = 0;
    console.log(this.noCdrSettings);
  }
}


@Component({
  selector: 'app-special-attachments',
  templateUrl: './special-attachements.html',
  styleUrls: ['../general.component.css']
})

export class SpecialAttachmentsComponent {

  constructor() {
  }

}

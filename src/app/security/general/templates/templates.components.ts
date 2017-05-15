import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsComponent implements OnChanges {
  @Input()
  generalSettings: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['generalSettings'].currentValue);
  }

  restoreDefaultGeneralSettings = () => {
    this.generalSettings.UseAntiviruses = true;
    this.generalSettings.HandleLinks = true;
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
  modelHasChanged = false;
  isUndefined = () => {
    return isNullOrUndefined(this.oldCdr);
  }
  constructor() {
  }

  ngDoCheck() {
    if (!(this.isUndefined()) && (this.oldCdr !== this.cdrSettings)){
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
  @Input()
  noCdrSettings: any;

  constructor() {
  }
  restoreDefaultNoCdr = () => {
    this.noCdrSettings['Unrecognized Files'] = 0;
    this.noCdrSettings['Video/Sound'] = 0;
    this.noCdrSettings['Applications/Scripts'] = 0;
  }
}


@Component({
  selector: 'app-special-attachments',
  templateUrl: './special-attachements.html',
  styleUrls: ['../general.component.css']
})

export class SpecialAttachmentsComponent {
  @Input()
  noCdrSettings: any;

  constructor() {
  }
  restoreDefaultNoCdr = () => {
    this.noCdrSettings['Unrecognized Files'] = 0;
    this.noCdrSettings['Video/Sound'] = 0;
    this.noCdrSettings['Applications/Scripts'] = 0;
  }
}

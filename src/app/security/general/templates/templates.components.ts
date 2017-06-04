import {Component, Input, ChangeDetectorRef, OnChanges} from '@angular/core';
import {
  Policy,
  SpecialAttachments
} from '../../../model/company-policy';

@Component({
  selector: 'general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['../general.component.css']
})

export class GeneralSettingsComponent {
  @Input()
  generalSettings: Policy;

  constructor() {
  }

}
@Component({
  selector: 'general-with-cdr',
  templateUrl: './with-cdr.component.html',
  styleUrls: ['../general.component.css']

})
export class GeneralSettingsWithCDRComponent {

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

export class GeneralSettingsWithoutCDRComponent implements OnChanges{
  @Input()
  generalSettings: Policy;

  ngOnChanges(...args: any[]) {
    console.log(args[0].generalSettings.currentValue.AttachmentsWithoutCdr);
    // changes.prop contains the old and the new value...
  }
  // @Input() specialAttachmentSettings: SpecialAttachments;
  // constructor() {
  // }

}

@Component({
  selector: 'special-attachments',
  templateUrl: './special-attachements.html',
  styleUrls: ['../general.component.css']
})

export class SpecialAttachmentsComponent {
  @Input()
  specialAttachmentsSettings: SpecialAttachments;

  constructor() {
  }

}

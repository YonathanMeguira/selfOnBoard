import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {SecurityService} from '../security.service';
import {
  GeneralSettingsComponent,
  GeneralSettingsWithCDRComponent,
  GeneralSettingsWithoutCDRComponent,
  SpecialAttachmentsComponent
} from './templates/templates.components';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [SecurityService],
  entryComponents: [GeneralSettingsComponent, GeneralSettingsWithCDRComponent, GeneralSettingsWithoutCDRComponent, SpecialAttachmentsComponent]
})

export class GeneralComponent implements OnInit{

  mainPolicySettings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}, 'SpecialAttachments': {}};
  numberOfMaliciousLinks = 4;
  defaultValues: any;

  ngOnInit() {
    this.securityService.getSettings().subscribe(
      result => {
        this.mainPolicySettings = result;
        this.defaultValues = result;
        console.log(this.mainPolicySettings);
      }, error => {
        console.log('an error occurred');
      }
    );
  }
  constructor(private securityService: SecurityService, private changeDetection: ChangeDetectorRef) {
  }
  resetToDefaultValues(){
    this.mainPolicySettings = this.defaultValues;
  }
  saveSettings = () => {
    // setting all values on cdr to be the same
    for (const setting in this.mainPolicySettings.AttachementsProcessedLevels) {
      this.mainPolicySettings.AttachementsProcessedLevels[setting] = this.mainPolicySettings.AttachementsProcessedLevels['Documents'];
    }
    this.securityService.saveSettings(this.mainPolicySettings).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    );
  }


}

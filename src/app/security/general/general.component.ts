import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../security.service';
import {
  GeneralSettingsComponent,
  GeneralSettingsWithCDRComponent,
  GeneralSettingsWithoutCDRComponent,
  SpecialAttachmentsComponent
} from './templates/templates.components';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [SecurityService],
  entryComponents: [GeneralSettingsComponent, GeneralSettingsWithCDRComponent, GeneralSettingsWithoutCDRComponent, SpecialAttachmentsComponent]
})

export class GeneralComponent implements OnInit {

  mainPolicySettings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}, 'SpecialAttachments': {}};
  numberOfMaliciousLinks = 4;

  ngOnInit() {
    this.securityService.getSettings().subscribe(
      result => {
        this.mainPolicySettings = result;
        console.log(this.mainPolicySettings);
      }, error => {
        console.log('an error occurred');
      }
    );
  }

// to do => check if model has changed and if API Call to post was made before changing view
  constructor(private securityService: SecurityService, private snackBar: MdSnackBar) {
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

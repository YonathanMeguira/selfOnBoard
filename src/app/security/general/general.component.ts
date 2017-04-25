import {Component, OnInit, Input} from '@angular/core';
import {SecurityService} from '../security.service';
import {GeneralSettingsComponent, AttachementProcessedWithCdrComponent} from './templates/templates.components';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [SecurityService],
  entryComponents : [GeneralSettingsComponent, AttachementProcessedWithCdrComponent]
})

export class GeneralComponent implements OnInit {

  mainPolicySettings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
  numberOfMaliciousLinks = 4;

  ngOnInit() {
    console.log('subscribing');
    this.securityService.getSettings().subscribe(
      result => {
        console.log(result);
        this.mainPolicySettings = result;
        console.log(this.mainPolicySettings);
      }, error => {
        console.log('an error occurred');
      }
    )
  }

  constructor(private securityService: SecurityService) {
  }


  restoreDefaultCdr = () => {
    this.mainPolicySettings.AttachementsProcessedLevels.Documents = 2;
    this.mainPolicySettings.AttachementsProcessedLevels.Images = 2;
    this.mainPolicySettings.AttachementsProcessedLevels.Presentations = 2;
    this.mainPolicySettings.AttachementsProcessedLevels.Spreadsheets = 2;
  }
  restoreDefaultNoCdr = () => {
    this.mainPolicySettings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
    this.mainPolicySettings.AttachementsWithoutCdr['Video/Sound'] = 0;
    this.mainPolicySettings.AttachementsWithoutCdr['Applications/Scripts'] = 0;

  }

}

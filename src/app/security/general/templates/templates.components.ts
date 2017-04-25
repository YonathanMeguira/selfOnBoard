import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./style.css']
})

export class GeneralSettingsComponent  {
  @Input()
  mainPolicySettings: any;
  constructor() { }

  restoreDefaultGeneralSettings = () => {
    this.mainPolicySettings.UseAntiviruses = true;
    this.mainPolicySettings.HandleLinks = true;
  }
}
@Component({
  selector: 'attachement-processed-with-cdr',
  templateUrl: './attachement-processed-with-cdr.component.html',
  styleUrls: ['./style.css']
})
export class AttachementProcessedWithCdrComponent  {

  @Input()
  mainPolicySettings: any;
  constructor() { }
}

import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ElementRef,Renderer2, ViewChild} from '@angular/core';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-user-update-plan',
  templateUrl: './upgrade-plan.html',
  styleUrls: ['./billing.component.css'],
  providers: [AccountService]
})

export class UpdatePlanComponent {
  selectedPlan: any;
  currentPlan: string;
  changePassword = true;
  forgotPassword = false;
  currentRd : Renderer2;
  config:any;
  private stripeSubscriptionToken: any;

  constructor(public dialogRef: MdDialogRef<UpdatePlanComponent>, private rd: Renderer2, private accountService: AccountService) {
    this.currentRd = rd;
    this.config = this.dialogRef._containerInstance.dialogConfig.data;
    this.currentPlan = this.config.accountData.CurrentPlan;
    this.selectedPlan = this.currentPlan;
    this.stripeSubscriptionToken = this.config.accountData.StripeSubscriptionToken
  };


  selected(event:any){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.selectedPlan = value;
    console.log(target);
  }

  getCSSClasses(str:string){
    if (str.toLocaleLowerCase() === this.selectedPlan.toLocaleLowerCase()){
      return "btn btn-upgrade-selected"
    }
    return "btn btn-upgrade-unselected";
  }

  isButtonDisabled(){
    return this.selectedPlan !== this.currentPlan;
  }

  saveAccountPlan(){
    //return;
    this.accountService.updateBillingData(this.stripeSubscriptionToken, this.selectedPlan.toLocaleLowerCase()).subscribe(()=>{
        var blobDataToSend = this.config.accountData;

        blobDataToSend.CurrentPlan = this.selectedPlan.toLocaleLowerCase();

        // update the server with new plan
        // TODO:: check with the server if he can update this data atomiclly by him self
        this.accountService.postAccountGeneralSettings(blobDataToSend).subscribe(()=>  {
          }
          ,
          error => console.log(error)
        );
        this.dialogRef.close(true);
        // update the blob
      },
      error => {
        // TODO:: throw error message to user.
        console.log(error)
      });
  }
}

class BillingData{
  numOfUsers:string;
  fee:string;
  planName:string;
  companyName:string;
  companyNumber:string;
}



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  entryComponents: [UpdatePlanComponent],
  providers: [AccountService]

})
export class BillingComponent implements OnInit {
  accountData: any;
  private dialogRef: MdDialogRef<any>;
  users = [139, 140, 141, 142, 143, 144, 145];
  billingData: BillingData = new BillingData();

  constructor(public dialog: MdDialog, public accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.getAccountGeneralSettings().subscribe(
      result => {
        if (result == null) {
          return;
        }

        this.accountData = result;
        this.billingData.companyName = this.accountData.CompanyName;
        this.billingData.companyNumber = this.accountData.CompanyNumber;

        if (!this.accountData.StripeSubscriptionToken){
          return;
        }

        // fetch the relevant billing info
        this.accountService.getBillingData(this.accountData.StripeSubscriptionToken).subscribe(
          billingResult => {
            if (billingResult == null) {
              return;
            }

            this.billingData.fee = billingResult.FeeDesc;
            this.billingData.numOfUsers = billingResult.UsersQuantity;
            this.billingData.planName = billingResult.PlanName;
          }),
          (error) =>{
            console.log(error)};
      });
  };

  openUpgradePlan() {
    this.dialogRef = this.dialog.open(UpdatePlanComponent, {width: '50%', data:{accountData:this.accountData,billingData:this.billingData}});
    this.dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == true)
        this.ngOnInit();
    });
  };
}

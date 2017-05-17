import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {HttpService} from './shared/token.injector';
import {DialogsService, ConfirmDialog} from './shared/dialogs.service';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmailComponent} from './email/email.component';
import {SearchComponent} from './email/search/search.component';
import {BrowseComponent} from './email/browse/browse.component';
import {SecurityComponent} from './security/security.component';
import {ExceptionComponent} from './security/exception/exception.component';
import {GeneralComponent} from './security/general/general.component';
import {AccountComponent} from './account/account.component';
import {UserComponent, UserChangePasswordComponent} from './user/user.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  GeneralSettingsComponent,
  GeneralSettingsWithCDRComponent,
  GeneralSettingsWithoutCDRComponent,
  SpecialAttachmentsComponent

} from './security/general/templates/templates.components';
import {
  AccountGeneralComponent,
  ChangePasswordModalComponent
} from './account/account-general/account-general.component';
import {
  ExceptionSettingsComponent, ExistingExceptionsComponent,
  NewExceptionComponent
} from './security/exception/templates/templates.component';

// routing
import {AppRoutingModule} from './app.routes';
import {ResponseHandlerService} from './shared/response-handler.service';
import {UserIsSobAndHasToken} from './shared/route-activators';
// 3rd libraries
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePickerModule} from 'ng2-datepicker';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CovalentDataTableModule} from '@covalent/core';
import {CovalentCoreModule} from '@covalent/core';
import {TagInputModule} from 'ng2-tag-input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { default as reducer } from './store/app-store';

// custom pipes

import {DictionaryIteratorPipe, GetPercentagePipe} from './shared/pipes';
import {NotificationsComponent} from './account/notifications/notifications.component';
import {BillingComponent, UpdatePlanComponent} from './account/billing/billing.component';


// dashboard components
import {
  TotalsTopComponent,
  GraphSelectorComponent,
  GraphComponent,
  PieChartsComponent,
  EmailSectionComponent,
  NewsFeedComponent
} from './dashboard/templates/dashboard-templates/dashboard-templates.component';
import {FirstTimeUserComponent} from './dashboard/templates/first-time-user/first-time-user.component';
import {NewUserPasswordComponent} from './new-user-password/new-user-password.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {DashboardEffects} from "./store/effects/dashboard.effects";
import {DashboardActions} from "./store/actions/dashboard.actions";
import {DashboardService} from "./dashboard/dashboard.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmailSectionComponent,
    EmailComponent,
    SearchComponent,
    BrowseComponent,
    NewsFeedComponent,
    SecurityComponent,
    ExceptionComponent,
    GeneralComponent,
    AccountComponent,
    UpdatePlanComponent,
    ChangePasswordModalComponent,
    UserChangePasswordComponent,
    UserComponent,
    GeneralSettingsComponent,
    GeneralSettingsWithCDRComponent,
    SpecialAttachmentsComponent,
    GeneralSettingsWithoutCDRComponent,
    AccountGeneralComponent,
    ExceptionSettingsComponent,
    ExistingExceptionsComponent,
    NewExceptionComponent,
    DictionaryIteratorPipe,
    NotificationsComponent,
    BillingComponent,
    TotalsTopComponent,
    GraphSelectorComponent,
    GraphComponent,
    PieChartsComponent,
    ConfirmDialog,
    FirstTimeUserComponent,
    GetPercentagePipe,
    NewUserPasswordComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CovalentDataTableModule,
    BrowserAnimationsModule,
    CovalentCoreModule,
    DatePickerModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    TagInputModule,
    NgxChartsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),
    EffectsModule.run(DashboardEffects),
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, ResponseHandlerService]
    }, ResponseHandlerService, DialogsService, UserIsSobAndHasToken,DashboardService, DashboardActions,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  entryComponents: [ChangePasswordModalComponent, ConfirmDialog,
    UserChangePasswordComponent, UpdatePlanComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function httpFactory(backend: XHRBackend, options: RequestOptions, responseHandler: ResponseHandlerService) {
  return new HttpService(backend, options, responseHandler);
}

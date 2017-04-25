import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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
import {UserComponent} from './user/user.component';

// routing
import {AppRoutingModule} from './app.routes';
// 3rd libraries
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePickerModule } from 'ng2-datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CovalentDataTableModule } from '@covalent/core';
import { CovalentCoreModule } from '@covalent/core';
import { GeneralSettingsComponent, AttachementProcessedWithCdrComponent } from './security/general/templates/templates.components';
import { AccountGeneralComponent } from './account/account-general/account-general.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmailComponent,
    SearchComponent,
    BrowseComponent,
    SecurityComponent,
    ExceptionComponent,
    GeneralComponent,
    AccountComponent,
    UserComponent,
    GeneralSettingsComponent,
    AttachementProcessedWithCdrComponent,
    AccountGeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CovalentDataTableModule,
    DatePickerModule,
    NgxDatatableModule,
    CovalentCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

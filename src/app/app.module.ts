import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {ListingPageComponent} from './listing-page/listing-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AccountService} from '../services/account.service';
import {ListingService} from '../services/listing.service';
import {AdminService} from '../services/admin.service';
import {LoginBarComponent} from './login-bar/login-bar.component';
import {CreateAccountPageComponent} from './create-account-page/create-account-page.component';
import {JwtModule} from '@auth0/angular-jwt';
import {OcticonDirective} from '../directives/octicon.directive';
import {ModalContentComponent} from './modal-content/modal-content.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {TicketService} from '../services/ticket.service';
import {AccountRecoveryPageComponent} from './account-recovery-page/account-recovery-page.component';
import {VerificationPageComponent} from './verification-page/verification-page.component';
import { ListingViewComponent } from './listing-view/listing-view.component';

const appRoutes: Routes = [
  {path: '', component: CreateAccountPageComponent},
  {path: 'account-recovery', component: AccountRecoveryPageComponent},
  {path: 'verify/:token', component: VerificationPageComponent},
  {path: 'listings', component: ListingPageComponent},
  {path: 'listing', component: ListingViewComponent},
  {path: 'create-listing', component: CreateListingComponent},
  {path: 'support', component: ContactPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    TitleBarComponent,
    LoginBarComponent,
    CreateAccountPageComponent,
    ListingPageComponent,
    ModalContentComponent,
    OcticonDirective,
    NavMenuComponent,
    CreateListingComponent,
    ContactPageComponent,
    AccountRecoveryPageComponent,
    VerificationPageComponent,
    ListingViewComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('ACCESS_TOKEN');
        },
        authScheme: '',
        whitelistedDomains: [environment.serverDomain]
      }
    }),
    MatMenuModule,
    NgbModule.forRoot()
  ],
  providers: [
    HttpClient,
    AccountService,
    ListingService,
    TicketService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

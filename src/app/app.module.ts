import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderVerticalComponent } from './header-vertical/header-vertical.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ConnectionComponent } from './connection/connection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { HeaderHorizontalComponent } from './header-horizontal/header-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderVerticalComponent,
    SignupUserComponent,
    ConnectionComponent,
    OpenStreetMapComponent,
    HeaderHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

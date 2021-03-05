import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderVerticalComponent } from './header-vertical/header-vertical.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ConnectionComponent } from './connection/connection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderVerticalComponent,
    SignupUserComponent,
    ConnectionComponent,
    FooterComponent,
    OpenStreetMapComponent
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

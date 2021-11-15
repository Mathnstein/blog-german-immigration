import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalImmigrationComponent } from './components/pages/personal-immigration/personal-immigration.component';
import { PreflightChecksComponent } from './components/pages/preflight-checks/preflight-checks.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService } from '@angular/fire/compat/analytics';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BlogService } from './services/blog.service';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    FooterComponent,
    PersonalImmigrationComponent,
    PreflightChecksComponent,
    LikeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFireDatabaseModule,
    FontAwesomeModule,
    MatIconModule,
    MatBadgeModule,
    NgbModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    BlogService
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }

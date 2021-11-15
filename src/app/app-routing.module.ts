import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonalImmigrationComponent } from './components/pages/personal-immigration/personal-immigration.component';
import { PreflightChecksComponent } from './components/pages/preflight-checks/preflight-checks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal-immigration', component: PersonalImmigrationComponent },
  { path: 'pre-flight-checks', component: PreflightChecksComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }

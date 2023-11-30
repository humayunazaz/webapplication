import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageModule } from '../contact-page/contact-page.module';
import { DashboardPageModule } from '../dashboard-page/dashboard-page.module';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ContactPageModule,
    DashboardPageModule,
    CoreModule,
  ],
})
export class LandingPageModule {}

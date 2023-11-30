import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard-page/dashboard-page.module').then(
            (m) => m.DashboardPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact-page/contact-page.module').then(
            (m) => m.ContactPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}

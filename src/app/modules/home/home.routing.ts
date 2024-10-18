import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LandingComponent } from '../pages/landing-page/landing/landing.component';
import { AboutComponent } from '../pages/about/about.component';
import { LoginComponent } from '../pages/login/login.component';
import { DevelopmentComponent } from '../pages/development/development.component';

export const homeRouting: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'productions',
        component: DevelopmentComponent,
      },
      {
        path: 'studio',
        component: DevelopmentComponent,
      },
    ],
  },
];

import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../contact/contact.component';
import { LandingComponent } from '../landing-page/landing/landing.component';
import { AboutComponent } from '../about/about.component';

export const homeRouting: Route[] = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'home/landing',
  },
  {
    path: 'home',
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
    ],
  },
];

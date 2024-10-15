import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LandingComponent } from '../pages/landing-page/landing/landing.component';
import { AboutComponent } from '../pages/about/about.component';

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

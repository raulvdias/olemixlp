import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../common/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { homeRouting } from './home.routing';
import { LandingModule } from '../pages/landing-page/landing/landing.module';
import { FooterComponent } from '../common/footer/footer.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { LoginComponent } from '../pages/login/login.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    RouterModule.forRoot(homeRouting),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    SwiperModule,
    LandingModule,
    ContactComponent,
    AboutComponent,
    LoginComponent,
  ],
})
export class HomeModule {}

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
import { ContactModule } from '../pages/contact/contact.module';
import { HistoryModule } from '../pages/about/about.module';
import { LoginModule } from '../pages/login/login.module';

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
    ContactModule,
    HistoryModule,
    LoginModule,
  ],
})
export class HomeModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { homeRouting } from './home.routing';
import { LandingModule } from '../landing-page/landing/landing.module';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    RouterModule.forRoot(homeRouting, {
      anchorScrolling: 'enabled',
      useHash: true,
    }),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    SwiperModule,
    LandingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}

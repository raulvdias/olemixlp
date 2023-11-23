import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperComponent } from '../../swipper/swipper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { SwiperModule } from 'swiper/angular';
import { LandingComponent } from './landing.component';
import { ServicesComponent } from '../services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LandingComponent, SwipperComponent, ServicesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    SwiperModule,
    BrowserAnimationsModule,
  ],
})
export class LandingModule {}

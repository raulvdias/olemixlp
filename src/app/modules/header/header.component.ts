import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: any;
  opacity: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onResize();
  }

  redirectWhastapp() {
    window.open(
      'https://wa.me/556294545218?text=Olá, vim pelo site da Olemix Audio Design!'
    );
  }

  redirectLanding() {
    this.router.navigateByUrl('/home/landing');
  }
}

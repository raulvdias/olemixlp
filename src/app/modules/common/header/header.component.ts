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
  opened = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;

    //Case modal menu is opened and screen bigger than md: 1293, close modal
    if (this.screenWidth > 1293 && this.opened) {
      this.openMenu();
    }
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
    this.router.navigateByUrl('/landing');
  }

  openMenu() {
    this.opened = !this.opened;

    document.querySelectorAll('body').forEach((body) => {
      body.classList.toggle('no-scroll');
    });

    document.querySelectorAll('html').forEach((html) => {
      html.classList.toggle('no-scroll');
    });
  }
}

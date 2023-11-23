import { Component, HostListener, OnInit } from '@angular/core';
import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({ display: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1.5s ease-in-out')),
      transition(':enter', [
        style({ opacity: 0.1 }),
        animate(1500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit {
  isScrolled = false;

  @HostListener('window:scroll', ['event'])
  scrollCheck() {
    if (window.scrollY < 150) {
      this.isScrolled = false;
    } else if (window.scrollY > 400) {
      this.isScrolled = true;
    }
  }
  constructor() {}

  ngOnInit(): void {
    this.scrollCheck();
  }
}

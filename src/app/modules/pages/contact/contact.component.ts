import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class ContactComponent implements OnInit {
  screenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.onResize();
  }

  redirectWhastapp() {
    window.open(
      'https://wa.me/556294545218?text=Olá, vim pelo site da Olemix Audio Design!'
    );
  }
}

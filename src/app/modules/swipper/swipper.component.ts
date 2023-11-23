import { Component, HostListener, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss'],
})
export class SwipperComponent implements OnInit {
  screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  images = [
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
    {
      title: 'Troféu',
      path: '../../../assets/trofeu.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.onResize();
  }
}

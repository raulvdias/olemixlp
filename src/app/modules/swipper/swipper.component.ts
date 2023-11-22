import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss'],
})
export class SwipperComponent implements OnInit {
  constructor() {}

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
  ];

  ngOnInit(): void {}
}

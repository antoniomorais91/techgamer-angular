import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Navigation , Autoplay } from 'swiper';

SwiperCore.use([ Navigation, Autoplay ]);

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css',],
  encapsulation: ViewEncapsulation.None,
})
export class BannerHomeComponent {

}

import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{

  items: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Left
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/img/produtos/01.jpg',
    previewUrl: 'assets/img/produtos/01_thumb.jpg',
    titleUrl: 'R$ 380,00'
  },
  {
    srcUrl: 'assets/img/produtos/02.jpg',
    previewUrl: 'assets/img/produtos/02_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/03.jpg',
    previewUrl: 'assets/img/produtos/03_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/04.jpg',
    previewUrl: 'assets/img/produtos/04_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/05.jpg',
    previewUrl: 'assets/img/produtos/05_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/06.jpg',
    previewUrl: 'assets/img/produtos/06_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/07.jpg',
    previewUrl: 'assets/img/produtos/07_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/08.jpg',
    previewUrl: 'assets/img/produtos/08_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/09.jpg',
    previewUrl: 'assets/img/produtos/09_thumb.jpg'
  },
  {
    srcUrl: 'assets/img/produtos/10.jpg',
    previewUrl: 'assets/img/produtos/10_thumb.jpg'
  }
];

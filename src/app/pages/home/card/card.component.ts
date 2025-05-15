import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  images = [
    { src: '/template-animals/gato1.png', alt: 'Gato 1' },
    { src: '/template-animals/cachorro.png', alt: 'Cachorro' },
    { src: '/template-animals/gato2.png', alt: 'Gato 2' },
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoplay() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 3000);
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  restartAutoplay() {
    clearInterval(this.intervalId);
    this.startAutoplay();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  images = [
    { src: '/template-animals/gato1.png', alt: 'Gato 1' },
    { src: '/template-animals/cachorro.png', alt: 'Cachorro ' },
    { src: '/template-animals/gato2.png', alt: 'Gato 2' },
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
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

import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-main',
  imports: [LottieComponent, ButtonComponent],
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
})
export class MainComponent {
  get animalsBackground() {
    return '/home/gato-cachorro.png';
  }
  options: AnimationOptions = {
    path: '/home/MouseAnimation.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, HeaderComponent, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

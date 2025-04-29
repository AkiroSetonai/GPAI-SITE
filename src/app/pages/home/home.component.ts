import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { QuickFormComponent } from './quick-form/quick-form.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-home',
  imports: [
    MainComponent,
    HeaderComponent,
    AboutSectionComponent,
    QuickFormComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

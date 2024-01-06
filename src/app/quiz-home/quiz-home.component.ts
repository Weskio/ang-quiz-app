import { NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [NgClass,RouterModule],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.scss'
})
export class QuizHomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformServer(this.platformId)) {
      // This code will be executed only on the server, so you can skip hydration here
    }
  }

  isDarkMode = false

  toggleTheme(){
   this.isDarkMode= !this.isDarkMode
   console.log('hello')
  }

}

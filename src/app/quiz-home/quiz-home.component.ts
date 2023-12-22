import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.scss'
})
export class QuizHomeComponent {

  isDarkMode = false

  toggleTheme(){
   this.isDarkMode= !this.isDarkMode
   console.log('hello')
  }

}

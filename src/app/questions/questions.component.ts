import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  isDarkMode = false

  toggleTheme(){
   this.isDarkMode= !this.isDarkMode
   console.log('hello')
  }
}

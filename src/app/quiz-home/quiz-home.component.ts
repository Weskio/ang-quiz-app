import { NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.scss',
})
export class QuizHomeComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    // Apply the theme to your application as needed
  }


}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuizHomeComponent } from "./quiz-home/quiz-home.component";
import { QuestionsComponent } from "./questions/questions.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, QuizHomeComponent, QuestionsComponent]
})
export class AppComponent {
  
}

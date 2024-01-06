import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Question } from '../question';
import { QuestionsDataService } from '../questions-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor, RouterModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  isDarkMode = false;
  i = 0;
  toggleLength = 10;
  isOptionSelected = false;
  selectedOption = null;
  selectedOptionIndex = null;
  isAnswered = false;
  score = 0;
  noAnswer = false;
  isResultShown = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
  questions!: Question[]; // Adjust based on your Question type

  constructor(
    private route: ActivatedRoute,
    private questionsDataService: QuestionsDataService
  ) {}

  ngOnInit(): void {
    // Retrieve the category title from the route parameter
    this.route.paramMap.subscribe((params) => {
      const categoryTitle = params.get('categoryTitle');
      if (categoryTitle) {
        this.questions =
          this.questionsDataService.extractQuestions(categoryTitle);
      }
    });
  }

  optionClicked(selectedOption) {
    if (!this.isAnswered) {
      this.selectedOption = selectedOption;
    }
  }

  submitAnswer() {
    if (this.selectedOption !== null) {
      this.isAnswered = true;
      this.noAnswer = false;
      if (this.selectedOption === this.questions[this.i].answer) {
        this.score++;
      }
    } else {
      this.noAnswer = true;
      console.log(this.questions);
    }
  }

  nextQuestion() {
    if (this.i < this.questions.length - 1) {
      // Safe to move to the next question
      this.toggleLength += 10;
      this.i++;
      this.isAnswered = false;
      this.selectedOption = null;
      this.noAnswer = false;
    } else {
      // We've reached the end of the questions
      console.log('end of quiz');
      this.isResultShown = true;
    }
  }

  playAgain() {
    location.reload();
    this.isDarkMode = !this.isDarkMode;
  }
}

import { Routes } from '@angular/router';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes = [
    {path: '', component:QuizHomeComponent },
    {path: 'questions', component:QuestionsComponent}
];

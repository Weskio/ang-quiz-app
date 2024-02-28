import { Routes } from '@angular/router';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes:Routes = [
    {path: '', component:QuizHomeComponent },
    { path: 'questions/:categoryTitle', component: QuestionsComponent }
];

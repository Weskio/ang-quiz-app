import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass,NgStyle,NgIf,NgFor],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  

  isDarkMode = false;
  i = 0;
  toggleLength = 10
  isOptionSelected=false

  toggleTheme(){
   this.isDarkMode= !this.isDarkMode
  }
  ;

  questionArray =[{
    title:"Which of the following is the correct structure for an HTML document?",
    options: [
      {text:"<html><head></head><body></body></html>" ,isCorrect:true}, 
      {text:"<head><html></html><body></body></head>" ,isCorrect:false}, 
      {text:"<body><head></head><html></html></body>" ,isCorrect:false}, 
      {text:"<html><body></body><head></head></html>" ,isCorrect:false}
  ]
  },
  {
    title:"Which HTML element is used to define the title of a document?",
    options:[
      {text:"<head>", isCorrect:false},
      {text:"<title>", isCorrect:true},
      {text:"<header>", isCorrect:false},
      {text:"<top>",isCorrect:false }
    ]
  }
]


selectedOptionIndex= null;
isAnswered = false;
score = 0;

optionClicked(index) {
  // Only allow selecting if the question hasn't been answered yet
  if (!this.isAnswered) {
    this.selectedOptionIndex = index;
  }
}

submitAnswer(){
  if(this.selectedOptionIndex !== null){
    this.isAnswered = true;
    if(this.questionArray[this.i].options[this.selectedOptionIndex].isCorrect){
      this.score++;
    }
  }
}

nextQuestion(){
  this.i++;
  this.toggleLength += 10;
  // Reset for the next question
  this.selectedOptionIndex = null;
  this.isAnswered = false;
}

 


}

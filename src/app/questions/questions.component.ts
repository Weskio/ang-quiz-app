import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  isDarkMode = false;
  i = 0;
  toggleLength = 10
  isCorrect =false

  toggleTheme(){
   this.isDarkMode= !this.isDarkMode
  }

  ;

  questionArray =[{
    title:"Which of the following is the correct structure for an HTML document?",
    options: [
      "<html><head></head><body></body></html>", 
      "<head><html></html><body></body></head>", 
      "<body><head></head><html></html></body>", 
       "<html><body></body><head></head></html>"
      ]
  },
  {
    title:"Which HTML element is used to define the title of a document?",
    options:[
      "<head>",
      "<title>",
      "<header>",
      "<top>"
    ]
  }
]

nextQuestion(){
  this.i++
  this.toggleLength+=10
}

submitAnswer(){
  this.isCorrect=true

}
}

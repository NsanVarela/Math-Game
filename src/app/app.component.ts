import { Component, Input } from '@angular/core';
import { MathGameService } from './math-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Math Game';
  randNumber1: number;
  randNumber2: number;
  question: number[];
  score: number;

  @Input() newQuestion: Array<number> = [];

  constructor(private mathS: MathGameService) {
    this.question = this.mathS.generateQuestion();
    this.randNumber1 =  this.question[0];
    this.randNumber2 =  this.question[1];
  }

  ngOnInit() {}

  resultNumber($event) {
    console.log(`resultNumber() :`, $event, this.question[0], this.question[1], this.question[2]);
    this.mathS.score++
    // console.log('score : ', this.mathS.score)
    this.question = this.mathS.generateQuestion();
    this.randNumber1 =  this.question[0];
    this.randNumber2 =  this.question[1];
  }

}

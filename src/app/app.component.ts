import { Question, defaultQuestionList } from './../assets/questions';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'slaa-katten-af-toenden';
  popup: boolean = false;
  questionIndex = -1;
  defaultQuestions: Question[] = defaultQuestionList;
  correct?: boolean;
  hitCounter: number = 0;
  tryCounter: number = 0;

  hitClicked() {
    this.questionIndex++;
    this.popup = true;
    this.tryCounter++;
  }

  questionAnswered(response: String) {
    this.popup = false;
    if (response === this.defaultQuestions[this.questionIndex].answer) {
      if (this.tondeShouldExplode()) {
        this.explodeTonde();
      } else {
        this.hitTonde();
        this.hitCounter++;
      }
    } else {
      this.correct = false;
      this.booHoo();
    }
  }

  tondeShouldExplode(): boolean {
    if (this.hitCounter < 5) return false;
    let chance = this.getSigmoid(this.hitCounter);
    let diceRoll = this.getRandomInt(100) / 100;
    console.log(
      `Try: ${this.hitCounter}, Chance: ${chance}, Diceroll: ${diceRoll}`
    );
    if (chance > diceRoll) return true;
    else return false;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getSigmoid(x: number) {
    let x_factor = x * 0.25 - 5;
    return Math.exp(x_factor) / (Math.exp(x_factor) + 1);
  }

  hitTonde() {
    let elem = document.getElementById('bat');
    elem?.classList.add('hit');
    this.correct = true;
    new Promise((resolve) => setTimeout(resolve, 750)).then(() => {
      elem?.classList.remove('hit');
      this.correct = undefined;
    });
  }

  booHoo() {
    let elem = document.getElementById('bat');
    elem?.classList.add('miss');
    this.correct = false;
    new Promise((resolve) => setTimeout(resolve, 750)).then(() => {
      elem?.classList.remove('miss');
      this.correct = undefined;
    });
  }

  explodeTonde() {
    let elemBat = document.getElementById('bat');
    let elemTonde = document.getElementById('tonde');
    let elemExplosion = document.getElementById('explosion');

    elemBat?.classList.add('hit');
    this.correct = true;
    new Promise((resolve) => setTimeout(resolve, 50)).then(() => {
      elemExplosion?.classList.remove('hide');
      new Promise((resolve) => setTimeout(resolve, 450)).then(() => {
        elemExplosion?.classList.add('big');
        new Promise((r) => setTimeout(r, 250)).then(() => {
          elemTonde?.classList.add('hide');
          elemBat?.classList.add('hide');
          this.correct = undefined;
        });
      });
    });
  }
}

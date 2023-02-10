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
      this.hitTonde();
      this.hitCounter++;
    } else {
      this.correct = false;
      this.booHoo();
    }
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

  explodeTonde() {}
}

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
  questionIndex = 0;
  defaultQuestions: Question[] = defaultQuestionList;

  hitClicked() {
    this.popup = true;
    this.questionIndex++;
  }

  questionAnswered(response: String) {
    this.popup = false;
    if (response === this.defaultQuestions[this.questionIndex].answer) {
      this.hitTonde();
    } else {
      this.booHoo();
    }
  }

  hitTonde() {
    let elem = document.getElementById('bat');
    elem?.classList.add('hit');
    new Promise((resolve) => setTimeout(resolve, 750)).then(() => {
      elem?.classList.remove('hit');
    });
  }

  explodeTonde() {}

  booHoo() {
    alert('FORKERT!');
  }
}

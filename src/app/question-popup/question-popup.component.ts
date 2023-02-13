import { Question } from './../../assets/questions';
import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss'],
})
export class QuestionPopupComponent implements AfterContentInit, OnDestroy {
  ngOnDestroy(): void {
    this.countdownTimer = 10;
    this.allOptions = undefined;
    this.question = undefined;
  }
  @Input() question?: Question;

  @Output() response = new EventEmitter<String>();

  allOptions?: string[];

  countdownTimer = 10;

  @ViewChild('counter', { static: true }) counter: ElementRef;

  ngAfterContentInit() {
    if (this.question) this.setAnswers(this.question);

    setInterval(() => {
      if (this.counter.nativeElement.classList.contains('big')) {
        this.counter.nativeElement.classList.remove('big');
      } else {
        this.counter.nativeElement.classList.add('big');
      }
    }, 250);
    setInterval(() => {
      this.countdownTimer--;
      if (this.countdownTimer === 0) this.emitReponse('nope');
      this.counter.nativeElement.innerText = this.countdownTimer;
    }, 1000);
  }

  emitReponse(response: string) {
    this.allOptions = undefined;
    this.response.emit(response);
  }
  setAnswers(question: Question) {
    let allOptions = [];
    if (question.options.includes(question.answer))
      allOptions = question.options;
    else allOptions = [...question.options, question.answer];

    this.allOptions = this.shuffle(allOptions);
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}

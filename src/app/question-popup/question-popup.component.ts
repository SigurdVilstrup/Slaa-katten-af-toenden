import { Question } from './../../assets/questions';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss'],
})
export class QuestionPopupComponent implements AfterViewInit {
  @Input() question?: Question;

  @Output() response = new EventEmitter<String>();

  countdownTimer = 10;
  @ViewChild('counter', { static: true }) counter: ElementRef;

  ngAfterViewInit() {
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
    this.response.emit(response);
  }
}

import { Question } from './../../assets/questions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss'],
})
export class QuestionPopupComponent {
  @Input() question?: Question;

  @Output() response = new EventEmitter<String>();

  constructor() {}

  emitReponse(response: string) {
    this.response.emit(response);
  }
}

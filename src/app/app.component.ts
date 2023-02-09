import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'slaa-katten-af-toenden';

  hitClicked() {
    alert('Du trykkede på SLÅ!');
  }
}

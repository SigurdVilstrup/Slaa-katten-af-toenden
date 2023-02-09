import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'slaa-katten-af-toenden';

  hitClicked() {
    let elem = document.getElementById('bat');
    elem?.classList.add('hit');
    new Promise((resolve) => setTimeout(resolve, 750)).then(() => {
      elem?.classList.remove('hit');
    });
  }
}

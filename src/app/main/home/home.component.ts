import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '@aurochses/angular-progress-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _progressBarService: ProgressBarService
  ) {

  }

  ngOnInit() {
    this._progressBarService.show();

    setTimeout(() => this._progressBarService.hide(), 5000);
  }

}

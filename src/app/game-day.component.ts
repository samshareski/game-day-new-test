import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { LineScoreService } from './line-score.service';
import { LineScoreComponent } from './line-score/line-score.component';
import { Score } from './score';

@Component({
  moduleId: module.id,
  selector: 'game-day-app',
  templateUrl: 'game-day.component.html',
  styleUrls: ['game-day.component.css'],
  directives: [LineScoreComponent],
  providers: [HTTP_PROVIDERS, LineScoreService]
})
export class GameDayAppComponent {
  title = 'new title';
  score: Score;
  
  constructor(private lineScoreService: LineScoreService) { }
  
  ngOnInit() {
    this.lineScoreService.getScore()
    .subscribe(score => {
      console.log('subscribe');
      this.score = score;
    })
  }
  
  
}

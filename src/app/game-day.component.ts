import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { LineScoreService } from './line-score.service';
import { LineScoreComponent } from './line-score/line-score.component';
import { InningStateComponent } from './inning-state/inning-state.component';
import { PitchesComponent } from './pitches/pitches.component';
import { Score } from './score';
import { Pitch } from './pitch';
import { InningState } from './inning-state';

@Component({
  moduleId: module.id,
  selector: 'game-day-app',
  templateUrl: 'game-day.component.html',
  styleUrls: ['game-day.component.css'],
  directives: [LineScoreComponent, InningStateComponent,
               PitchesComponent],
  providers: [HTTP_PROVIDERS, LineScoreService]
})
export class GameDayAppComponent {
  title = 'new title';
  score: Score;
  inningState: InningState;
  pitches: Array<Pitch>;
  
  constructor(private lineScoreService: LineScoreService) { }
  
  ngOnInit() {
    this.lineScoreService.getScore()
    .subscribe(score => {
      console.log('subscribe');
      this.score = score;
    });
    this.lineScoreService.getInningState()
    .subscribe(inningState => {
      console.log('sub is');
      this.inningState = inningState;
    });
    this.lineScoreService.getPitches()
    .subscribe(pitches => {
      console.log('sub p');
      console.log(pitches);
      this.pitches = pitches;
    });
  }
  
  
}

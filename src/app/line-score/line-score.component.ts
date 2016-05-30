import { Component, Input } from '@angular/core';

import { Score } from '../score';

@Component({
  moduleId: module.id,
  selector: 'app-line-score',
  templateUrl: 'line-score.component.html',
  styleUrls: ['line-score.component.css']
})
export class LineScoreComponent {
  @Input()
  score: Score;
}

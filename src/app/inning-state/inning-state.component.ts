import { Component, Input } from '@angular/core';

import { InningState } from '../inning-state';

@Component({
  moduleId: module.id,
  selector: 'app-inning-state',
  templateUrl: 'inning-state.component.html',
  styleUrls: ['inning-state.component.css']
})
export class InningStateComponent {
  @Input()
  inningState: InningState;
}

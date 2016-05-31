import { Component, Input } from '@angular/core';

import { Pitch } from '../pitch';

@Component({
  moduleId: module.id,
  selector: 'app-pitches',
  templateUrl: 'pitches.component.html',
  styleUrls: ['pitches.component.css']
})
export class PitchesComponent {
  @Input()
  pitches: Array<Pitch>;
}

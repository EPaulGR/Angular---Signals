import { Component } from '@angular/core';
import { Exercise2Component } from '../../exercises/exercise-2/exercise-2.component';
import { Exercise3Component } from '../../exercises/exercise-3/exercise-3.component';

@Component({
  selector: 'app-level-2',
  templateUrl: './level-2.component.html',
  styleUrl: './level-2.component.css',
  imports: [
    Exercise2Component,
    Exercise3Component,
  ],
})
export class Level2Component {

}

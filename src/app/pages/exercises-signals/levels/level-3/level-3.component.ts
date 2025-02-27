import { Component } from '@angular/core';
import { Exercise4Component } from '../../exercises/exercise-4/exercise-4.component';
import { Exercise5Component } from '../../exercises/exercise-5/exercise-5.component';

@Component({
  selector: 'app-level-3',
  templateUrl: './level-3.component.html',
  styleUrl: './level-3.component.css',
  imports: [
    Exercise4Component,
    Exercise5Component,
  ],
})
export class Level3Component {

}

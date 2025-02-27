import { Component } from '@angular/core';
import { Exercise1Component } from '../../exercises/exercise-1/exercise-1.component';

@Component({
  selector: 'app-level-1',
  templateUrl: './level-1.component.html',
  styleUrl: './level-1.component.css',
  imports: [
    Exercise1Component,
],
})
export class Level1Component {

}

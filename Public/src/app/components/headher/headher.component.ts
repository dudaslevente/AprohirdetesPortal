import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headher',
  standalone: true,
  imports: [],
  templateUrl: './headher.component.html',
  styleUrl: './headher.component.scss'
})
export class HeadherComponent {
  @Input('title') appTitle = '';
}

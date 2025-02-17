import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foooter',
  standalone: true,
  imports: [],
  templateUrl: './foooter.component.html',
  styleUrl: './foooter.component.scss'
})
export class FoooterComponent {
  @Input('company') company = '';
  @Input('author') author = '';
}

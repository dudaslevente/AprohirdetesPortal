import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foooter',
  imports: [],
  templateUrl: './foooter.component.html',
  styleUrl: './foooter.component.scss'
})
export class FoooterComponent {
  @Input('company') company = '';
  @Input('author') author = '';
}

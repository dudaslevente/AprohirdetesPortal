import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadherComponent } from "./components/headher/headher.component";
import { FoooterComponent } from "./components/foooter/foooter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadherComponent, FoooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aprohirdetes Portal';
  appName = 'Aprohirdetes Portal';
  company = 'Bajai SZC - Türr István Technikum';
  author = '13.A Szoftverfejlesztő';
}

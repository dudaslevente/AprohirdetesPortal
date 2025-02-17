import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadherComponent } from './components/headher/headher.component';
import { FoooterComponent } from './components/foooter/foooter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Ezt hozzáadtuk
  imports: [RouterOutlet, HeadherComponent, FoooterComponent, MatMenuModule, MatButtonModule, NavbarComponent],  // Az importok
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // A styleUrls-t használd, nem styleUrl
})
export class AppComponent {
  title = 'Aprohirdetes Portal';
  appName = 'Aprohirdetes Portal';
  company = 'Bajai SZC - Türr István Technikum';
  author = '13.A Szoftverfejlesztő';

  constructor(private auth: AuthService) {}
}

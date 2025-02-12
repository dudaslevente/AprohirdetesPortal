import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadherComponent } from "./components/headher/headher.component";
import { FoooterComponent } from "./components/foooter/foooter.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadherComponent, FoooterComponent, MatMenuModule, MatButtonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Aprohirdetes Portal';
  appName = 'Aprohirdetes Portal';
  company = 'Bajai SZC - Türr István Technikum';
  author = '13.A Szoftverfejlesztő';

  constructor(private auth: AuthService) {}
}

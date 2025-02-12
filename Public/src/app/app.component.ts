import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadherComponent } from "./components/headher/headher.component";
import { FoooterComponent } from "./components/foooter/foooter.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuItem } from './interfaces/menuitem';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadherComponent, FoooterComponent, MatMenuModule, MatButtonModule],
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

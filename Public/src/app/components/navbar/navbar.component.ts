import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  constructor(
    private api: ApiService,
    private auth: AuthService
  ){}

  isLoggedIn:boolean = false;

  ngOnInit(): void {

    this.auth.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = res;
    });
  }
}

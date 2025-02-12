import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ){}

  login() {
    if (!this.email || !this.password) {
      console.error("Minden mezőt ki kell tölteni!");
      return;
    }

    const Data = { 
      email: this.email, 
      password: this.password 
    };

    this.api.login(Data).subscribe({
      next: (res:any) => {
        console.log(" Sikeres bejelentkezés:", res);
        this.auth.login(res.token);
        alert("Sikeres bejelentkezés!");

        //this.router.navigate(['/package']);
      },
      error: (err) => {
        console.error(" Hiba a bejelentkezésnél:", err);
        alert("Hiba a bejelentkezésnél!");
      }
    });
  }
}

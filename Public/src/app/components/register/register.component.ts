import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';









@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,MatDividerModule,MatIconModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
  ){}

  registration() {
    if (!this.name || !this.email || !this.password) {
      console.error("Minden mezőt ki kell tölteni!");
      return;
    }
  
    const Data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
  
    this.api.registration(Data).subscribe({
      next: (res) => {
        console.log("Sikeres regisztráció:", res);
        alert("Sikeres regisztráció:");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Hiba a regisztrációnál:", err);
        alert("Hiba a regisztrációnál:")
      }
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from '../../services/api.service';
import { Advertisment } from '../../interfaces/advertisement';
import { LightboxComponent } from "../lightbox/lightbox.component";

@Component({
  selector: 'app-hirdetesek',
  
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, LightboxComponent],
  templateUrl: './hirdetesek.component.html',
  styleUrl: './hirdetesek.component.scss'
})
export class HirdetesekComponent implements OnInit{
  constructor(private api: ApiService){}

  advertisments:Advertisment[] = []


  ngOnInit(): void {
    this.api.readAll('advertisements').subscribe(res => {
      this.advertisments = res as Advertisment[];
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api.service';
import { Advertisment } from '../../interfaces/advertisement';
import { LightboxComponent } from "../lightbox/lightbox.component";
import { MatInputModule } from '@angular/material/input';

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hirdetesek',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, LightboxComponent, MatInputModule],
  templateUrl: './hirdetesek.component.html',
  styleUrl: './hirdetesek.component.scss'
})
export class HirdetesekComponent implements OnInit {
  constructor(private api: ApiService) {}

  advertisments: Advertisment[] = [];
  filteredAdvertisements: Advertisment[] = [];  // A szűrt hirdetések tárolására.

  ngOnInit(): void {
    this.api.readAll('advertisements').subscribe((res: any) => {
      this.advertisments = res.advertisements as Advertisment[];
      this.filteredAdvertisements = [...this.advertisments];  // Alapértelmezetten az összes hirdetést betöltjük.
    });
  }

  filterAdvertisements() {
    if (this.selectedCar && this.selectedCar !== '0') {
      // A selectedCar-t számra alakítjuk, hogy biztosan szám típusú legyen
      const selectedCarValue = Number(this.selectedCar);
  
      // A hirdetéseket szűrjük a kategóriaID alapján, mindkettőt szám típusra konvertálva
      this.filteredAdvertisements = this.advertisments.filter(ad => {
        const categoryID = Number(ad.categoryID); // A categoryID-t számra konvertáljuk
        return categoryID === selectedCarValue; // Most már biztos, hogy mindkettő szám
      });
    } else {
      // Ha a selectedCar '0', az összes hirdetés megjelenik
      this.filteredAdvertisements = [...this.advertisments];
    }
  
    console.log("filteredAdvertisements:", this.filteredAdvertisements);
  }
  
  
  
  

  cars: Car[] = [
    {value: '0', viewValue: 'Össsze'},
    { value: '1', viewValue: 'Ingatlan' },
    { value: '2', viewValue: 'Gépjármű' },
    { value: '3', viewValue: 'Szolgáltatás' },
    { value: '4', viewValue: 'Háztartási gép' },
    { value: '5', viewValue: 'Játék' },
    { value: '6', viewValue: 'Ruházat' },
    { value: '7', viewValue: 'Elektronika' },
    { value: '8', viewValue: 'Sport' },
    { value: '9', viewValue: 'Szabadidő' },
    { value: '10', viewValue: 'Egyéb' },
  ];

  selectedCar = this.cars[9].value;  // Alapértelmezetten az 'Egyéb' kategória.

  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
    this.filterAdvertisements();  // Ha változik a kategória, alkalmazzuk a szűrést.
  }
}

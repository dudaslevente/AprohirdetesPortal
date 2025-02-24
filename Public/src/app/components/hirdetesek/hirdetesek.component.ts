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

  advertisments: Advertisment[] = [];  // Az összes hirdetés
  filteredAdvertisements: Advertisment[] = [];  // A szűrt hirdetések

  ngOnInit(): void {
    this.api.readAll('advertisements').subscribe((res: any) => {
      this.advertisments = res.advertisements as Advertisment[];
      this.filteredAdvertisements = [...this.advertisments];  // Alapértelmezetten az összes hirdetés megjelenik
    });
  }

  // Szűrés a kiválasztott kategória alapján
  filterAdvertisements() {
    if (this.selectedCar) {
      // Az összehasonlítást úgy végezzük, hogy mindkettőt ugyanarra a típusra alakítjuk
      this.filteredAdvertisements = this.advertisments.filter(ad => {
        return ad.categoryID === this.selectedCar;  // Ha a kategóriaID megegyezik a kiválasztottal, akkor megtartjuk
      });
    } else {
      this.filteredAdvertisements = [...this.advertisments];  // Ha nincs kiválasztott kategória, az összes hirdetés megjelenik
    }
  }

  // Kategóriák listája
  cars: Car[] = [
    { value: '1', viewValue: 'Ingatlan' },
    { value: '2', viewValue: 'Gépjármű' },
    { value: '3', viewValue: 'Háztartási gép' },
    { value: '4', viewValue: 'Szolgáltatás' },
    { value: '5', viewValue: 'Játék' },
    { value: '6', viewValue: 'Ruházat' },
    { value: '7', viewValue: 'Elektronika' },
    { value: '8', viewValue: 'Sport' },
    { value: '9', viewValue: 'Szabadidő' },
    { value: '10', viewValue: 'Egyéb' },
  ];

  // Kezdetben az 'Egyéb' kategória van kiválasztva
  selectedCar = this.cars[9].value;

  // Kategória kiválasztásakor hívjuk a szűrési funkciót
  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
    this.filterAdvertisements();  // Kategória választás után szűrjük a hirdetéseket
  }
}

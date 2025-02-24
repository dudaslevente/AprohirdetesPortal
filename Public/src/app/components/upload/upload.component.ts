import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-upload',
  standalone: true,  
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})

  export class UploadComponent {
    
    cars: Car[] = [
      {value: '1', viewValue: 'Ingatlan'},
      {value: '2', viewValue: 'Gépjármű'},
      {value: '3', viewValue: 'Szolgáltatás'},
      {value: '4', viewValue: 'Háztartási gép'},
      {value: '5', viewValue: 'Játék'},
      {value: '6', viewValue: 'Ruházat'},
      {value: '7', viewValue: 'Elektronika'},
      {value: '8', viewValue: 'Sport'},
      {value: '9', viewValue: 'Szabadidő'},
      {value: '10', viewValue: 'Egyéb'},
    ];
    
    selectedCar = this.cars[9].value;
  
    selectCar(event: Event) {
      this.selectedCar = (event.target as HTMLSelectElement).value;
    }


    disabled = false;
    max = 5000000;
    min = 100;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
  }
  


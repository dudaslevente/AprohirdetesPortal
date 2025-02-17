import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';  

@Component({
  selector: 'app-upload',
  standalone: true,  
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './upload.component.html',
  // styleUrls: ['./upload.component.css'] // Ezt töröltük
})
export class UploadComponent {
  selectedCategory: string = '';
  categories = ['Category1', 'Category2', 'Category3']; 
}

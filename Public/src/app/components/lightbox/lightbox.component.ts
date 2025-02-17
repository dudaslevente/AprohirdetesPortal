import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})

export class LightboxComponent {

  @Input() images: string[] = [];
  currentImageIndex: number | null = null;
  serverUrl = environment.serverUrl + '/uploads/';

  openLightbox(index: number): void {
    this.currentImageIndex = index;
  }

  closeLightbox(): void {
    this.currentImageIndex = null;
  }

  nextImage(): void {
    if (this.currentImageIndex !== null) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex !== null) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }

}

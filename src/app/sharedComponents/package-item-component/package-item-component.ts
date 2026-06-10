import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-package-item-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './package-item-component.html',
  styleUrl: './package-item-component.css'
})
export class PackageItemComponent {
  @Input({ required: true })
  tour!: any;

  ngOnInit() {
  }

  get imagePath(): string {
    if (this.tour.imageFolder) {
      return `assets/img/${this.tour.imageFolder}/${this.tour.imageName}.${this.tour.imageExt}`;
    }
    return `assets/img/${this.tour.imageName}.${this.tour.imageExt}`;
  }
}

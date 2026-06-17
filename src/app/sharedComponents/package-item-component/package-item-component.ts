import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buildTourImagePath, onImageError, buildSrcSet, defaultSizes, toWebpSrc } from '../../utils/image.util';

@Component({
  selector: 'app-package-item-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './package-item-component.html',
  styleUrl: './package-item-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageItemComponent {
  @Input({ required: true })
  tour!: any;

  readonly onImageError = onImageError;
  readonly defaultSizes = defaultSizes;

  get imagePath(): string {
    return toWebpSrc(buildTourImagePath(this.tour));
  }

  get imageSrcSet(): string {
    return buildSrcSet(this.imagePath);
  }

  trackByIndex(index: number): number {
    return index;
  }
}

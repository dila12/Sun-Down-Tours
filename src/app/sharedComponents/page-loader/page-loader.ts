import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '../../i18n/t.pipe';
import { PageLoaderService } from './page-loader.service';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './page-loader.html',
  styleUrl: './page-loader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoaderComponent {
  readonly loader = inject(PageLoaderService);
}

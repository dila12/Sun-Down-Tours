import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-popular-tours',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-popular-tours.html',
  styleUrl: './home-popular-tours.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePopularToursComponent {}

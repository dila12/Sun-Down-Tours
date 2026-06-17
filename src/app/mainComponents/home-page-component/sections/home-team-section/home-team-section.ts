import { ChangeDetectionStrategy, Component } from '@angular/core';
import { onImageError } from '../../../../utils/image.util';

@Component({
  selector: 'app-home-team-section',
  standalone: true,
  templateUrl: './home-team-section.html',
  styleUrl: './home-team-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamSectionComponent {
  readonly onImageError = onImageError;
  readonly team1Src = 'assets/img/Team/1.webp';
  readonly team2Src = 'assets/img/Team/2.webp';
}

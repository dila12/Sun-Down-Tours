import { ChangeDetectionStrategy, Component } from '@angular/core';
import { onImageError } from '../../../../utils/image.util';

@Component({
  selector: 'app-home-team-section',
  standalone: true,
  templateUrl: './home-team-section.html',
  styleUrls: ['./home-team-section.css', '../../../../../styles/fontawesome-brands.lazy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamSectionComponent {
  readonly onImageError = onImageError;
  readonly team1Src = 'assets/img/Team/1.webp';
  readonly team2Src = 'assets/img/Team/2.webp';
}

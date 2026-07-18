import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialIconComponent } from '../../../../sharedComponents/social-icon/social-icon';
import { bestImageSrc, buildSrcSet, onImageError } from '../../../../utils/image.util';

@Component({
  selector: 'app-home-team-section',
  standalone: true,
  imports: [SocialIconComponent],
  templateUrl: './home-team-section.html',
  styleUrls: ['./home-team-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamSectionComponent {
  readonly onImageError = onImageError;
  readonly buildSrcSet = buildSrcSet;
  readonly bestImageSrc = bestImageSrc;
  readonly team1Src = 'assets/img/Team/1.webp';
  readonly team2Src = 'assets/img/Team/2.webp';
}

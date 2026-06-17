import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactUsComponent } from '../../../../sharedComponents/contact-us-component/contact-us-component';

@Component({
  selector: 'app-home-contact-section',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './home-contact-section.html',
  styleUrl: './home-contact-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactSectionComponent {
  homecontact = true;
}

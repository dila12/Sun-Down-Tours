import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactUsComponent } from '../../sharedComponents/contact-us-component/contact-us-component';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule,ContactUsComponent],
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.css', '../../../styles/fontawesome-brands.lazy.scss']
})
export class AboutComponent {
  homecontact = true;
}

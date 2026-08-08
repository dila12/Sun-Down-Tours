import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environment';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import {
  SITE_ADDRESS_FULL,
  SITE_EMAIL,
  SITE_HOURS_LABEL,
  SITE_HOURS_NOTE,
  SITE_MAPS_EMBED_URL,
  SITE_MAPS_LINK_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_TRIPADVISOR_URL,
  SITE_WHATSAPP_URL,
} from '../../i18n/site-contact';
import { FaqSectionComponent } from '../faq-section/faq-section';
import { SocialIconComponent } from '../social-icon/social-icon';

interface DialCountry {
  name: string;
  dial_code: string;
  code: string;
  flag?: string;
}

/** First-paint list — full ISO file loads when the select is opened. */
const PRIORITY_COUNTRIES: DialCountry[] = [
  { name: 'Sri Lanka', dial_code: '+94', code: 'LK' },
  { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
  { name: 'Germany', dial_code: '+49', code: 'DE' },
  { name: 'France', dial_code: '+33', code: 'FR' },
  { name: 'Italy', dial_code: '+39', code: 'IT' },
  { name: 'Spain', dial_code: '+34', code: 'ES' },
  { name: 'Netherlands', dial_code: '+31', code: 'NL' },
  { name: 'United States', dial_code: '+1', code: 'US' },
  { name: 'Australia', dial_code: '+61', code: 'AU' },
  { name: 'India', dial_code: '+91', code: 'IN' },
  { name: 'United Arab Emirates', dial_code: '+971', code: 'AE' },
  { name: 'Poland', dial_code: '+48', code: 'PL' },
  { name: 'Russia', dial_code: '+7', code: 'RU' },
];

@Component({
  selector: 'app-contact-us-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
    FaqSectionComponent,
    SocialIconComponent,
  ],
  templateUrl: './contact-us-component.html',
  styleUrls: ['./contact-us-component.css', '../../../styles/ngx-toastr.lazy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  @Input() homecontact = false;
  readonly i18n = inject(LocaleService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly address = SITE_ADDRESS_FULL;
  readonly phoneDisplay = SITE_PHONE_DISPLAY;
  readonly phoneTel = SITE_PHONE_E164;
  readonly email = SITE_EMAIL;
  readonly hoursLabel = SITE_HOURS_LABEL;
  readonly hoursNote = SITE_HOURS_NOTE;
  readonly whatsappUrl = SITE_WHATSAPP_URL;
  readonly tripadvisorUrl = SITE_TRIPADVISOR_URL;
  readonly mapsLinkUrl = SITE_MAPS_LINK_URL;
  readonly mapsEmbedUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(SITE_MAPS_EMBED_URL);

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly toastr = inject(ToastrService);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contactPhone: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
    message: ['', Validators.required],
  });

  successMessage = '';
  submitOk = false;
  submitting = false;
  countriesList: DialCountry[] = PRIORITY_COUNTRIES;
  selectedCountryCode = 'LK';
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private allCountriesLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  loadAllCountries(): void {
    if (this.allCountriesLoaded || !isPlatformBrowser(this.platformId)) {
      return;
    }
    this.allCountriesLoaded = true;
    this.http.get<DialCountry[]>('/assets/data/countryCode.json').subscribe({
      next: (list) => {
        if (!Array.isArray(list) || !list.length) {
          this.allCountriesLoaded = false;
          return;
        }
        this.countriesList = list;
        this.cdr.markForCheck();
      },
      error: () => {
        this.allCountriesLoaded = false;
      },
    });
  }

  onSubmit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }

    if (this.submitting) {
      return;
    }

    const country = this.countriesList.find((c) => c.code === this.selectedCountryCode);
    const fullPhoneNumber =
      (country?.dial_code ?? '') + (this.contactForm.get('contactPhone')?.value ?? '');

    const formData = {
      ...this.contactForm.value,
      contactPhone: fullPhoneNumber,
    };

    this.submitting = true;
    this.successMessage = '';
    this.cdr.markForCheck();

    this.http.post(`${environment.backendUrl}/send-contact-email`, formData).subscribe({
      next: () => {
        this.submitting = false;
        this.submitOk = true;
        this.successMessage = this.i18n.t('contact.form.success');
        this.toastr.success(this.i18n.t('contact.form.successToast'));
        this.contactForm.reset();
        this.clearStatusLater();
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Email error:', err);
        this.submitting = false;
        this.submitOk = false;
        this.successMessage = this.i18n.t('contact.form.error');
        this.toastr.error(this.i18n.t('contact.form.errorToast'));
        this.clearStatusLater();
        this.cdr.markForCheck();
      },
    });
  }

  private clearStatusLater(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.successMessage = '';
      this.cdr.markForCheck();
    }, 4000);
  }
}

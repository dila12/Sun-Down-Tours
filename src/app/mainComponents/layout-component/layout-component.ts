import { Component, ChangeDetectionStrategy, ChangeDetectorRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ScrollToToComponent } from '../../sharedComponents/scroll-to-to-component/scroll-to-to-component';
import { withImageVersion } from '../../utils/image.util';
import { SocialIconComponent } from '../../sharedComponents/social-icon/social-icon';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LOCALES, LOCALE_META, type Locale } from '../../i18n/locales';
import {
  SITE_ADDRESS_FULL,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_WHATSAPP_URL,
} from '../../i18n/site-contact';

/** Small navbar logo — never fall back to the 1024×1024 PNG master. */
const LOGO_64 = '/assets/img/logos/2-64w.webp';
const LOGO_80 = '/assets/img/logos/2-80w.webp';
const LOGO_160 = '/assets/img/logos/2-160w.webp';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [CommonModule, ScrollToToComponent, RouterModule, SocialIconComponent, TranslatePipe],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  readonly i18n = inject(LocaleService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly locales = LOCALES;
  readonly localeMeta = LOCALE_META;

  readonly siteEmail = SITE_EMAIL;
  readonly sitePhone = SITE_PHONE_DISPLAY;
  readonly siteAddress = SITE_ADDRESS_FULL;
  readonly whatsappUrl = SITE_WHATSAPP_URL;

  navOpen = false;
  langMenuOpen = false;
  readonly logoSrc = withImageVersion(LOGO_80);
  /** Same brand mark as logos/2.png — sized for the 32px/80px navbar slot. */
  readonly logoSrcSet = `${withImageVersion(LOGO_64)} 64w, ${withImageVersion(LOGO_80)} 80w, ${withImageVersion(LOGO_160)} 160w`;
  readonly logoSizes = '(max-width: 767px) 32px, 80px';

  /** Localized root-relative path for a page in the current locale. */
  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
    this.cdr.markForCheck();
  }

  closeNav(): void {
    this.navOpen = false;
    this.cdr.markForCheck();
  }

  /**
   * Switches language while preserving the current page: resolves the current
   * page id into the localized slug of the target locale and navigates there.
   */
  changeLang(locale: Locale): void {
    if (locale === this.i18n.locale()) {
      this.closeNav();
      this.closeLangMenu();
      return;
    }
    const target = this.i18n.path(this.i18n.pageId(), locale);
    this.router.navigateByUrl(target);
    this.closeNav();
    this.closeLangMenu();
  }

  toggleLangMenu(event: Event): void {
    event.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
    this.cdr.markForCheck();
  }

  closeLangMenu(): void {
    if (!this.langMenuOpen) return;
    this.langMenuOpen = false;
    this.cdr.markForCheck();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.closeLangMenu();
  }
}

import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScrollToToComponent } from '../../sharedComponents/scroll-to-to-component/scroll-to-to-component';
import { onImageError } from '../../utils/image.util';
import { SocialIconComponent } from '../../sharedComponents/social-icon/social-icon';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [CommonModule, ScrollToToComponent, RouterModule, SocialIconComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  activeLang = 'en';
  navOpen = false;
  readonly onImageError = onImageError;
  readonly logoSrc = 'assets/img/logos/2-80w.webp';
  readonly logoSrcSet = 'assets/img/logos/2-80w.webp 80w, assets/img/logos/2-160w-opt.webp 160w';
  readonly logoSizes = '(max-width: 767px) 32px, 80px';

  private paramSub?: Subscription;
  private readonly onCaptureClick = (event: MouseEvent) => {
    this.language.handleInternalLinkClick(event);
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private language: LanguageService,
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((params) => {
      const lang = params.get('lang') || 'en';
      this.activeLang = lang;
      this.language.setLangFromRoute(lang === 'en' ? null : lang);
      this.cdr.markForCheck();
    });

    // Capture phase so we rewrite links before RouterLink navigates without a prefix
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.onCaptureClick, true);
    }
  }

  ngOnDestroy(): void {
    this.paramSub?.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('click', this.onCaptureClick, true);
    }
  }

  /** Language-prefixed router link for nav/footer. */
  langLink(path: string): string {
    return this.language.buildUrl(path);
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
    this.cdr.markForCheck();
  }

  closeNav(): void {
    this.navOpen = false;
    this.cdr.markForCheck();
  }

  changeLang(lang: string): void {
    this.activeLang = lang;
    this.language.switchLanguage(lang);
    this.cdr.markForCheck();
  }
}

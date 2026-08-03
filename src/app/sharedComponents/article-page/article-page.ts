import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';
import type { Locale } from '../../i18n/locales';
import { ArticleContentService } from '../../i18n/articles/article-content.service';
import type { BaseArticle } from '../../i18n/articles/types';
import {
  bestImageSrc,
  buildAvifSrcSet,
  buildSrcSet,
  onImageError,
  toWebpSrc,
} from '../../utils/image.util';
import { SITE_WHATSAPP_URL } from '../../i18n/site-contact';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './article-page.html',
  styleUrl: './article-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePageComponent implements OnInit {
  readonly i18n = inject(LocaleService);
  private readonly articles = inject(ArticleContentService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);

  pageId = '';
  kind: 'destination' | 'guide' | 'content' = 'content';
  article: BaseArticle | null = null;
  hubCards: { pageId: string; image: string; title: string; blurb: string }[] = [];

  readonly onImageError = onImageError;
  readonly bestImageSrc = bestImageSrc;
  readonly buildSrcSet = buildSrcSet;
  readonly buildAvifSrcSet = buildAvifSrcSet;
  readonly toWebpSrc = toWebpSrc;
  readonly whatsappUrl = SITE_WHATSAPP_URL;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.pageId = this.route.snapshot.data['pageId'] ?? '';
    const pageKind = this.route.snapshot.data['kind'] as string | undefined;
    const locale = (this.route.snapshot.data['locale'] as Locale | undefined) ?? this.i18n.locale();
    if (pageKind === 'destination' || pageKind === 'guide') {
      this.kind = pageKind;
      // Prefer a sync re-localize for the route locale — resolver data can be
      // English if LocaleService had not synced yet when the resolver ran.
      this.article =
        this.articles.get(this.pageId, locale) ??
        (this.route.snapshot.data['article'] as BaseArticle | null);
      this.cdr.markForCheck();
    } else if (this.pageId === 'destinations') {
      this.kind = 'content';
      void this.articles.destinationHubCards(locale).then((cards) => {
        this.hubCards = cards;
        this.cdr.markForCheck();
      });
    } else if (this.pageId === 'guides') {
      this.kind = 'content';
      void this.articles.guideHubCards(locale).then((cards) => {
        this.hubCards = cards;
        this.cdr.markForCheck();
      });
    }

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  trackByPageId(_: number, item: { pageId: string }): string {
    return item.pageId;
  }

  trackBySection(_: number, section: { id: string }): string {
    return section.id;
  }
}

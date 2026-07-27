import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../i18n/locale.service';
import {
  RESTAURANTS_PAGE,
  restaurantCopy,
  type RestaurantMenuItem,
  type RestaurantPageCopy,
} from '../../i18n/restaurants/page-content';
import { TranslatePipe } from '../../i18n/t.pipe';
import { TourContentService } from '../../i18n/tours/tour-content.service';

@Component({
  selector: 'app-resturant-component',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './resturant-component.html',
  styleUrl: './resturant-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResturantComponent {
  private readonly i18n = inject(LocaleService);
  private readonly tourContent = inject(TourContentService);

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  relatedLabel(pageId: string): string {
    const seoTitle = this.i18n.get(`seo.${pageId}.title`);
    if (typeof seoTitle === 'string' && seoTitle.length) {
      return seoTitle.split('|')[0].trim();
    }
    const card = this.tourContent.card(pageId);
    if (card?.title) {
      return card.title;
    }
    return pageId;
  }

  /** Localized copy for the active locale, falling back to English. */
  get copy(): RestaurantPageCopy {
    return restaurantCopy(this.i18n.locale());
  }

  categoryLabel(category: string): string {
    return this.copy.categories[category] ?? category;
  }

  selectedCategory = 'seafood';

  private readonly categoryIcons: Record<string, string> = {
    seafood: 'fa-fish',
    rice: 'fa-seedling',
    fried: 'fa-utensils',
    devilled: 'fa-bolt',
    noodles: 'fa-utensils',
    spaghetti: 'fa-utensils',
    salads: 'fa-leaf',
    sandwich: 'fa-utensils',
    soup: 'fa-mug-hot',
    drinks: 'fa-water',
  };

  categoryIcon(category: string): string {
    return this.categoryIcons[category] ?? 'fa-utensils';
  }

  /** Structural menu data (id + category + price). Names/descriptions are localized via `copy.menu`. */
  menuItems: RestaurantMenuItem[] = [
    /* Soup */
    { id: 'veg-soup', category: 'soup', price: 800 },
    { id: 'noodles-soup', category: 'soup', price: 1000 },
    { id: 'tomato-soup', category: 'soup', price: 700 },
    { id: 'chicken-soup', category: 'soup', price: 1500 },
    { id: 'prawn-soup', category: 'soup', price: 1600 },
    { id: 'crab-soup', category: 'soup', price: 1200 },
    { id: 'shark-soup', category: 'soup', price: 1000 },
    { id: 'tuna-soup', category: 'soup', price: 1000 },
    { id: 'mixed-soup', category: 'soup', price: 1700 },

    /* Rice & Curry */
    { id: 'rice-curry-fish', category: 'rice', price: 3000 },
    { id: 'rice-curry-egg', category: 'rice', price: 2500 },
    { id: 'rice-curry-chicken', category: 'rice', price: 3500 },

    /* Fried Rice */
    { id: 'veg-fried-rice', category: 'fried', price: 1000 },
    { id: 'egg-fried-rice', category: 'fried', price: 1100 },
    { id: 'fish-fried-rice', category: 'fried', price: 1200 },
    { id: 'chicken-fried-rice', category: 'fried', price: 1500 },
    { id: 'prawns-fried-rice', category: 'fried', price: 1800 },
    { id: 'seafood-fried-rice', category: 'fried', price: 1900 },

    /* Spaghetti */
    { id: 'veg-spaghetti', category: 'spaghetti', price: 1200 },
    { id: 'veg-egg-spaghetti', category: 'spaghetti', price: 1500 },
    { id: 'veg-prawns-spaghetti', category: 'spaghetti', price: 2000 },
    { id: 'veg-chicken-spaghetti', category: 'spaghetti', price: 1900 },

    /* Noodles */
    { id: 'veg-noodles', category: 'noodles', price: 1000 },
    { id: 'egg-noodles', category: 'noodles', price: 1200 },
    { id: 'prawn-noodles', category: 'noodles', price: 1800 },
    { id: 'chicken-noodles', category: 'noodles', price: 1700 },

    /* Devilled & Omelets */
    { id: 'devilled-fish', category: 'devilled', price: 2500 },
    { id: 'devilled-chicken', category: 'devilled', price: 3000 },
    { id: 'grill-chicken', category: 'devilled', price: 3500 },
    { id: 'devilled-prawns', category: 'devilled', price: 3500 },
    { id: 'devilled-calamari', category: 'devilled', price: 3000 },
    { id: 'egg-omelet', category: 'devilled', price: 1000 },
    { id: 'chicken-sausages', category: 'devilled', price: 1500 },
    { id: 'potato-chips', category: 'devilled', price: 1500 },

    /* Salads */
    { id: 'veg-salad', category: 'salads', price: 1200 },
    { id: 'cucumber-salad', category: 'salads', price: 1000 },
    { id: 'tomato-onion-salad', category: 'salads', price: 800 },
    { id: 'pineapple-salad', category: 'salads', price: 1300 },

    /* Sandwich */
    { id: 'tomato-sandwich', category: 'sandwich', price: 800 },
    { id: 'cheese-sandwich', category: 'sandwich', price: 1200 },
    { id: 'egg-sandwich', category: 'sandwich', price: 1000 },
    { id: 'fish-sandwich', category: 'sandwich', price: 1000 },
    { id: 'chicken-sandwich', category: 'sandwich', price: 1300 },

    /* Seafood */
    { id: 'tuna', category: 'seafood', price: 2000 },
    { id: 'shark', category: 'seafood', price: 2500 },
    { id: 'seer-fish', category: 'seafood', price: 3000 },
    { id: 'calamari', category: 'seafood', price: 3000 },
    { id: 'coral-fish', category: 'seafood', price: 3000 },
    { id: 'para-fish', category: 'seafood', price: 3000 },
    { id: 'prawns', category: 'seafood', price: 3500 },
    { id: 'jumbo-prawns', category: 'seafood', price: 4500 },
    { id: 'file-fish', category: 'seafood', price: 2000 },
    { id: 'lobster', category: 'seafood', price: 6000 },
    { id: 'manta-fish', category: 'seafood', price: 2000 },
    { id: 'crab', category: 'seafood', price: 3500 },
    { id: 'red-fish', category: 'seafood', price: 3500 },
    { id: 'seafood-mix-plate', category: 'seafood', price: 11000 },

    /* Drinks */
    { id: 'coffee', category: 'drinks', price: 400 },
    { id: 'tea', category: 'drinks', price: 300 },
    { id: 'king-coconut', category: 'drinks', price: 250 },
    { id: 'mango-juice', category: 'drinks', price: 700 },
  ];

  get filteredMenu() {
    const copy = this.copy;
    return this.menuItems
      .filter((item) => item.category === this.selectedCategory)
      .map((item) => {
        const entry = copy.menu[item.id] ?? RESTAURANTS_PAGE.en.menu[item.id];
        return {
          ...item,
          name: entry?.name ?? item.id,
          description: entry?.description ?? '',
        };
      });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

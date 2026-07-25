import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../i18n/locale.service';
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

  menuItems = [
    /* Soup */

    {
      category: 'soup',
      name: 'Vegetable Soup',
      description: 'Fresh vegetable soup served with bread',
      price: 800,
    },

    {
      category: 'soup',
      name: 'Noodles Soup',
      description: 'Warm noodles soup with vegetables',
      price: 1000,
    },

    {
      category: 'soup',
      name: 'Tomato Soup',
      description: 'Classic tomato soup served with bread',
      price: 700,
    },

    {
      category: 'soup',
      name: 'Chicken Soup',
      description: 'Chicken soup with herbs and spices',
      price: 1500,
    },

    {
      category: 'soup',
      name: 'Prawn Soup',
      description: 'Seafood soup with fresh prawns',
      price: 1600,
    },

    {
      category: 'soup',
      name: 'Crab Soup',
      description: 'Rich crab soup served with bread',
      price: 1200,
    },

    {
      category: 'soup',
      name: 'Shark Soup',
      description: 'Special shark soup with spices',
      price: 1000,
    },

    {
      category: 'soup',
      name: 'Tuna Soup',
      description: 'Fresh tuna soup with vegetables',
      price: 1000,
    },

    {
      category: 'soup',
      name: 'Mixed Soup',
      description: 'Mixed seafood soup with bread',
      price: 1700,
    },
    /* Rice & Curry */

    {
      category: 'rice',
      name: 'Rice & Curry with Fish',
      description: 'Rice with 3 vegetable curries and fish curry',
      price: 3000,
    },

    {
      category: 'rice',
      name: 'Rice & Curry with Egg',
      description: 'Rice with 3 vegetable curries and egg curry',
      price: 2500,
    },

    {
      category: 'rice',
      name: 'Rice & Curry with Chicken',
      description: 'Rice with 3 vegetable curries and chicken curry',
      price: 3500,
    },

    /* Fried Rice */

    {
      category: 'fried',
      name: 'Vegetable Fried Rice',
      description: 'Sri Lankan style vegetable fried rice',
      price: 1000,
    },

    {
      category: 'fried',
      name: 'Egg Fried Rice',
      description: 'Fried rice with egg',
      price: 1100,
    },

    {
      category: 'fried',
      name: 'Fish Fried Rice',
      description: 'Fried rice with fish',
      price: 1200,
    },

    {
      category: 'fried',
      name: 'Chicken Fried Rice',
      description: 'Fried rice with chicken',
      price: 1500,
    },

    {
      category: 'fried',
      name: 'Prawns Fried Rice',
      description: 'Fried rice with prawns',
      price: 1800,
    },

    {
      category: 'fried',
      name: 'Seafood Fried Rice',
      description: 'Mixed seafood fried rice',
      price: 1900,
    },

    /* Noodles */

    /* Spaghetti */

    {
      category: 'spaghetti',
      name: 'Vegetable Spaghetti',
      description: 'Spaghetti with fresh vegetables',
      price: 1200,
    },

    {
      category: 'spaghetti',
      name: 'Vegetable with Egg Spaghetti',
      description: 'Vegetable spaghetti with egg',
      price: 1500,
    },

    {
      category: 'spaghetti',
      name: 'Vegetable with Prawns Spaghetti',
      description: 'Spaghetti with prawns and vegetables',
      price: 2000,
    },

    {
      category: 'spaghetti',
      name: 'Vegetable with Chicken Spaghetti',
      description: 'Spaghetti with chicken and vegetables',
      price: 1900,
    },
    {
      category: 'noodles',
      name: 'Vegetable Noodles',
      description: 'Stir fried noodles with vegetables',
      price: 1000,
    },

    {
      category: 'noodles',
      name: 'Egg Noodles',
      description: 'Vegetable noodles with egg',
      price: 1200,
    },

    {
      category: 'noodles',
      name: 'Prawn Noodles',
      description: 'Noodles with prawns',
      price: 1800,
    },

    {
      category: 'noodles',
      name: 'Chicken Noodles',
      description: 'Noodles with chicken',
      price: 1700,
    },

    /* Devilled & Omelets */

    {
      category: 'devilled',
      name: 'Devilled Fish',
      description: 'Spicy devilled fish served with bread',
      price: 2500,
    },

    {
      category: 'devilled',
      name: 'Devilled Chicken',
      description: 'Sri Lankan style devilled chicken with spices',
      price: 3000,
    },

    {
      category: 'devilled',
      name: 'Grill Chicken',
      description: 'Grilled chicken served with bread',
      price: 3500,
    },

    {
      category: 'devilled',
      name: 'Prawns Devilled',
      description: 'Spicy devilled prawns',
      price: 3500,
    },

    {
      category: 'devilled',
      name: 'Calamari Devilled',
      description: 'Devilled calamari with Sri Lankan spices',
      price: 3000,
    },

    {
      category: 'devilled',
      name: 'Egg Omelet',
      description: 'Fresh egg omelet served with bread',
      price: 1000,
    },

    {
      category: 'devilled',
      name: 'Chicken Sausages',
      description: 'Chicken sausages with garlic sauce & bread',
      price: 1500,
    },

    {
      category: 'devilled',
      name: 'Potato Chips',
      description: 'Crispy potato chips',
      price: 1500,
    },
    /* Salads */

    {
      category: 'salads',
      name: 'Vegetable Salad',
      description: 'Fresh vegetable salad with light dressing',
      price: 1200,
    },

    {
      category: 'salads',
      name: 'Cucumber Salad',
      description: 'Fresh cucumber salad with herbs',
      price: 1000,
    },

    {
      category: 'salads',
      name: 'Tomato with Onion Salad',
      description: 'Tomato and onion salad with Sri Lankan spices',
      price: 800,
    },

    {
      category: 'salads',
      name: 'Pineapple Salad',
      description: 'Fresh pineapple salad with sweet and spicy dressing',
      price: 1300,
    },

    /* Sandwich */

    {
      category: 'sandwich',
      name: 'Tomato Sandwich',
      description: 'Fresh tomato sandwich with soft bread',
      price: 800,
    },

    {
      category: 'sandwich',
      name: 'Cheese Sandwich',
      description: 'Classic cheese sandwich',
      price: 1200,
    },

    {
      category: 'sandwich',
      name: 'Egg Sandwich',
      description: 'Egg sandwich with fresh vegetables',
      price: 1000,
    },

    {
      category: 'sandwich',
      name: 'Fish Sandwich',
      description: 'Fish sandwich with homemade sauce',
      price: 1000,
    },

    {
      category: 'sandwich',
      name: 'Chicken Sandwich',
      description: 'Grilled chicken sandwich',
      price: 1300,
    },
    /* Seafood */

    {
      category: 'seafood',
      name: 'Tuna',
      description:
        'Fresh grilled tuna with garlic sauce, bread, vegetable salad & rice',
      price: 2000,
    },

    {
      category: 'seafood',
      name: 'Shark',
      description:
        'Grilled shark steak with garlic sauce, bread, vegetable salad & rice',
      price: 2500,
    },

    {
      category: 'seafood',
      name: 'Seer Fish',
      description: 'Fresh seer fish grilled with garlic sauce',
      price: 3000,
    },

    {
      category: 'seafood',
      name: 'Calamari',
      description: 'Grilled calamari served with rice and salad',
      price: 3000,
    },

    {
      category: 'seafood',
      name: 'Coral Fish',
      description: 'Fresh coral fish grilled with garlic sauce',
      price: 3000,
    },

    {
      category: 'seafood',
      name: 'Para Fish',
      description: 'Grilled para fish served with vegetables and rice',
      price: 3000,
    },

    {
      category: 'seafood',
      name: 'Prawns',
      description: 'Fresh garlic prawns served with salad and rice',
      price: 3500,
    },

    {
      category: 'seafood',
      name: 'Jumbo Prawns',
      description: 'Large grilled jumbo prawns with garlic sauce',
      price: 4500,
    },

    {
      category: 'seafood',
      name: 'File Fish',
      description: 'Fresh file fish grilled with vegetables',
      price: 2000,
    },

    {
      category: 'seafood',
      name: 'Lobster',
      description: 'Fresh grilled lobster with garlic sauce and salad',
      price: 6000,
    },

    {
      category: 'seafood',
      name: 'Manta Fish',
      description: 'Fresh manta fish grilled with Sri Lankan spices',
      price: 2000,
    },

    {
      category: 'seafood',
      name: 'Crab',
      description: 'Fresh crab served with garlic sauce and vegetables',
      price: 3500,
    },

    {
      category: 'seafood',
      name: 'Red Fish',
      description: 'Grilled red fish served with rice and salad',
      price: 3500,
    },

    {
      category: 'seafood',
      name: 'Seafood Mix Plate',
      description:
        'Lobster, prawns, calamari, tuna, crab & shark with garlic sauce, bread, vegetable salad & rice',
      price: 11000,
    },

    /* Drinks */

    {
      category: 'drinks',
      name: 'Coffee',
      description: 'Fresh brewed coffee',
      price: 400,
    },

    {
      category: 'drinks',
      name: 'Tea',
      description: 'Sri Lankan tea',
      price: 300,
    },

    {
      category: 'drinks',
      name: 'King Coconut',
      description: 'Fresh king coconut',
      price: 250,
    },

    {
      category: 'drinks',
      name: 'Fresh Mango Juice',
      description: 'Fresh mango juice',
      price: 700,
    },
  ];

  get filteredMenu() {
    return this.menuItems.filter(
      (item) => item.category === this.selectedCategory,
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

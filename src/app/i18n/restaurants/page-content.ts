import type { Locale } from '../locales';

/** Structural menu item: stable id + category + price (locale-independent). */
export type RestaurantMenuItem = {
  id: string;
  category: string;
  price: number;
};

export type RestaurantMenuEntry = {
  name: string;
  description: string;
};

export type RestaurantPageCopy = {
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  bullets: string[];
  bookTable: string;
  ourMenu: string;
  /** "Check Our" */
  menuTitleBefore: string;
  /** "Sundown Menu" */
  menuTitleHighlight: string;
  menuLabel: string;
  categories: Record<string, string>;
  needHelp: string;
  contactUs: string;
  addressLabel: string;
  callUs: string;
  emailUs: string;
  openingHoursLabel: string;
  openingHoursValue: string;
  /** Keyed by menu item id. */
  menu: Record<string, RestaurantMenuEntry>;
};

const CATEGORIES_EN: Record<string, string> = {
  seafood: 'Seafood',
  rice: 'Rice & Curry',
  fried: 'Fried Rice',
  devilled: 'Devilled',
  noodles: 'Noodles',
  spaghetti: 'Spaghetti',
  salads: 'Salads',
  sandwich: 'Sandwich',
  soup: 'Soup',
  drinks: 'Drinks',
};

const CATEGORIES_DE: Record<string, string> = {
  seafood: 'Meeresfrüchte',
  rice: 'Reis & Curry',
  fried: 'Gebratener Reis',
  devilled: 'Scharf gebraten',
  noodles: 'Nudeln',
  spaghetti: 'Spaghetti',
  salads: 'Salate',
  sandwich: 'Sandwich',
  soup: 'Suppe',
  drinks: 'Getränke',
};

const CATEGORIES_FR: Record<string, string> = {
  seafood: 'Fruits de mer',
  rice: 'Riz & curry',
  fried: 'Riz sauté',
  devilled: 'Épicé (devilled)',
  noodles: 'Nouilles',
  spaghetti: 'Spaghetti',
  salads: 'Salades',
  sandwich: 'Sandwich',
  soup: 'Soupe',
  drinks: 'Boissons',
};

const CATEGORIES_IT: Record<string, string> = {
  seafood: 'Pesce e frutti di mare',
  rice: 'Riso e curry',
  fried: 'Riso saltato',
  devilled: 'Piccante (devilled)',
  noodles: 'Noodles',
  spaghetti: 'Spaghetti',
  salads: 'Insalate',
  sandwich: 'Sandwich',
  soup: 'Zuppa',
  drinks: 'Bevande',
};

const CATEGORIES_ES: Record<string, string> = {
  seafood: 'Marisco',
  rice: 'Arroz con curry',
  fried: 'Arroz frito',
  devilled: 'Picante (devilled)',
  noodles: 'Fideos',
  spaghetti: 'Espaguetis',
  salads: 'Ensaladas',
  sandwich: 'Sándwich',
  soup: 'Sopa',
  drinks: 'Bebidas',
};

const CATEGORIES_PL: Record<string, string> = {
  seafood: 'Owoce morza',
  rice: 'Ryż z curry',
  fried: 'Ryż smażony',
  devilled: 'Pikantne (devilled)',
  noodles: 'Makaron',
  spaghetti: 'Spaghetti',
  salads: 'Sałatki',
  sandwich: 'Kanapki',
  soup: 'Zupa',
  drinks: 'Napoje',
};

const CATEGORIES_RU: Record<string, string> = {
  seafood: 'Морепродукты',
  rice: 'Рис с карри',
  fried: 'Жареный рис',
  devilled: 'Острое (devilled)',
  noodles: 'Лапша',
  spaghetti: 'Спагетти',
  salads: 'Салаты',
  sandwich: 'Сэндвичи',
  soup: 'Супы',
  drinks: 'Напитки',
};

const MENU_EN: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Vegetable Soup', description: 'Fresh vegetable soup served with bread' },
  'noodles-soup': { name: 'Noodles Soup', description: 'Warm noodles soup with vegetables' },
  'tomato-soup': { name: 'Tomato Soup', description: 'Classic tomato soup served with bread' },
  'chicken-soup': { name: 'Chicken Soup', description: 'Chicken soup with herbs and spices' },
  'prawn-soup': { name: 'Prawn Soup', description: 'Seafood soup with fresh prawns' },
  'crab-soup': { name: 'Crab Soup', description: 'Rich crab soup served with bread' },
  'shark-soup': { name: 'Shark Soup', description: 'Special shark soup with spices' },
  'tuna-soup': { name: 'Tuna Soup', description: 'Fresh tuna soup with vegetables' },
  'mixed-soup': { name: 'Mixed Soup', description: 'Mixed seafood soup with bread' },

  'rice-curry-fish': { name: 'Rice & Curry with Fish', description: 'Rice with 3 vegetable curries and fish curry' },
  'rice-curry-egg': { name: 'Rice & Curry with Egg', description: 'Rice with 3 vegetable curries and egg curry' },
  'rice-curry-chicken': { name: 'Rice & Curry with Chicken', description: 'Rice with 3 vegetable curries and chicken curry' },

  'veg-fried-rice': { name: 'Vegetable Fried Rice', description: 'Sri Lankan style vegetable fried rice' },
  'egg-fried-rice': { name: 'Egg Fried Rice', description: 'Fried rice with egg' },
  'fish-fried-rice': { name: 'Fish Fried Rice', description: 'Fried rice with fish' },
  'chicken-fried-rice': { name: 'Chicken Fried Rice', description: 'Fried rice with chicken' },
  'prawns-fried-rice': { name: 'Prawns Fried Rice', description: 'Fried rice with prawns' },
  'seafood-fried-rice': { name: 'Seafood Fried Rice', description: 'Mixed seafood fried rice' },

  'veg-spaghetti': { name: 'Vegetable Spaghetti', description: 'Spaghetti with fresh vegetables' },
  'veg-egg-spaghetti': { name: 'Vegetable with Egg Spaghetti', description: 'Vegetable spaghetti with egg' },
  'veg-prawns-spaghetti': { name: 'Vegetable with Prawns Spaghetti', description: 'Spaghetti with prawns and vegetables' },
  'veg-chicken-spaghetti': { name: 'Vegetable with Chicken Spaghetti', description: 'Spaghetti with chicken and vegetables' },

  'veg-noodles': { name: 'Vegetable Noodles', description: 'Stir fried noodles with vegetables' },
  'egg-noodles': { name: 'Egg Noodles', description: 'Vegetable noodles with egg' },
  'prawn-noodles': { name: 'Prawn Noodles', description: 'Noodles with prawns' },
  'chicken-noodles': { name: 'Chicken Noodles', description: 'Noodles with chicken' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Spicy devilled fish served with bread' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Sri Lankan style devilled chicken with spices' },
  'grill-chicken': { name: 'Grill Chicken', description: 'Grilled chicken served with bread' },
  'devilled-prawns': { name: 'Prawns Devilled', description: 'Spicy devilled prawns' },
  'devilled-calamari': { name: 'Calamari Devilled', description: 'Devilled calamari with Sri Lankan spices' },
  'egg-omelet': { name: 'Egg Omelet', description: 'Fresh egg omelet served with bread' },
  'chicken-sausages': { name: 'Chicken Sausages', description: 'Chicken sausages with garlic sauce & bread' },
  'potato-chips': { name: 'Potato Chips', description: 'Crispy potato chips' },

  'veg-salad': { name: 'Vegetable Salad', description: 'Fresh vegetable salad with light dressing' },
  'cucumber-salad': { name: 'Cucumber Salad', description: 'Fresh cucumber salad with herbs' },
  'tomato-onion-salad': { name: 'Tomato with Onion Salad', description: 'Tomato and onion salad with Sri Lankan spices' },
  'pineapple-salad': { name: 'Pineapple Salad', description: 'Fresh pineapple salad with sweet and spicy dressing' },

  'tomato-sandwich': { name: 'Tomato Sandwich', description: 'Fresh tomato sandwich with soft bread' },
  'cheese-sandwich': { name: 'Cheese Sandwich', description: 'Classic cheese sandwich' },
  'egg-sandwich': { name: 'Egg Sandwich', description: 'Egg sandwich with fresh vegetables' },
  'fish-sandwich': { name: 'Fish Sandwich', description: 'Fish sandwich with homemade sauce' },
  'chicken-sandwich': { name: 'Chicken Sandwich', description: 'Grilled chicken sandwich' },

  tuna: { name: 'Tuna', description: 'Fresh grilled tuna with garlic sauce, bread, vegetable salad & rice' },
  shark: { name: 'Shark', description: 'Grilled shark steak with garlic sauce, bread, vegetable salad & rice' },
  'seer-fish': { name: 'Seer Fish', description: 'Fresh seer fish grilled with garlic sauce' },
  calamari: { name: 'Calamari', description: 'Grilled calamari served with rice and salad' },
  'coral-fish': { name: 'Coral Fish', description: 'Fresh coral fish grilled with garlic sauce' },
  'para-fish': { name: 'Para Fish', description: 'Grilled para fish served with vegetables and rice' },
  prawns: { name: 'Prawns', description: 'Fresh garlic prawns served with salad and rice' },
  'jumbo-prawns': { name: 'Jumbo Prawns', description: 'Large grilled jumbo prawns with garlic sauce' },
  'file-fish': { name: 'File Fish', description: 'Fresh file fish grilled with vegetables' },
  lobster: { name: 'Lobster', description: 'Fresh grilled lobster with garlic sauce and salad' },
  'manta-fish': { name: 'Manta Fish', description: 'Fresh manta fish grilled with Sri Lankan spices' },
  crab: { name: 'Crab', description: 'Fresh crab served with garlic sauce and vegetables' },
  'red-fish': { name: 'Red Fish', description: 'Grilled red fish served with rice and salad' },
  'seafood-mix-plate': { name: 'Seafood Mix Plate', description: 'Lobster, prawns, calamari, tuna, crab & shark with garlic sauce, bread, vegetable salad & rice' },

  coffee: { name: 'Coffee', description: 'Fresh brewed coffee' },
  tea: { name: 'Tea', description: 'Sri Lankan tea' },
  'king-coconut': { name: 'King Coconut', description: 'Fresh king coconut' },
  'mango-juice': { name: 'Fresh Mango Juice', description: 'Fresh mango juice' },
};

const MENU_DE: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Gemüsesuppe', description: 'Frische Gemüsesuppe, serviert mit Brot' },
  'noodles-soup': { name: 'Nudelsuppe', description: 'Warme Nudelsuppe mit Gemüse' },
  'tomato-soup': { name: 'Tomatensuppe', description: 'Klassische Tomatensuppe, serviert mit Brot' },
  'chicken-soup': { name: 'Hühnersuppe', description: 'Hühnersuppe mit Kräutern und Gewürzen' },
  'prawn-soup': { name: 'Garnelensuppe', description: 'Meeresfrüchtesuppe mit frischen Garnelen' },
  'crab-soup': { name: 'Krabbensuppe', description: 'Kräftige Krabbensuppe, serviert mit Brot' },
  'shark-soup': { name: 'Haifischsuppe', description: 'Besondere Haifischsuppe mit Gewürzen' },
  'tuna-soup': { name: 'Thunfischsuppe', description: 'Frische Thunfischsuppe mit Gemüse' },
  'mixed-soup': { name: 'Gemischte Suppe', description: 'Gemischte Meeresfrüchtesuppe mit Brot' },

  'rice-curry-fish': { name: 'Reis & Curry mit Fisch', description: 'Reis mit 3 Gemüsecurrys und Fischcurry' },
  'rice-curry-egg': { name: 'Reis & Curry mit Ei', description: 'Reis mit 3 Gemüsecurrys und Eiercurry' },
  'rice-curry-chicken': { name: 'Reis & Curry mit Huhn', description: 'Reis mit 3 Gemüsecurrys und Hühnercurry' },

  'veg-fried-rice': { name: 'Gebratener Reis mit Gemüse', description: 'Gebratener Reis nach sri-lankischer Art mit Gemüse' },
  'egg-fried-rice': { name: 'Gebratener Reis mit Ei', description: 'Gebratener Reis mit Ei' },
  'fish-fried-rice': { name: 'Gebratener Reis mit Fisch', description: 'Gebratener Reis mit Fisch' },
  'chicken-fried-rice': { name: 'Gebratener Reis mit Huhn', description: 'Gebratener Reis mit Hähnchen' },
  'prawns-fried-rice': { name: 'Gebratener Reis mit Garnelen', description: 'Gebratener Reis mit Garnelen' },
  'seafood-fried-rice': { name: 'Gebratener Reis mit Meeresfrüchten', description: 'Gebratener Reis mit gemischten Meeresfrüchten' },

  'veg-spaghetti': { name: 'Gemüse-Spaghetti', description: 'Spaghetti mit frischem Gemüse' },
  'veg-egg-spaghetti': { name: 'Gemüse-Spaghetti mit Ei', description: 'Gemüse-Spaghetti mit Ei' },
  'veg-prawns-spaghetti': { name: 'Gemüse-Spaghetti mit Garnelen', description: 'Spaghetti mit Garnelen und Gemüse' },
  'veg-chicken-spaghetti': { name: 'Gemüse-Spaghetti mit Huhn', description: 'Spaghetti mit Hähnchen und Gemüse' },

  'veg-noodles': { name: 'Gemüsenudeln', description: 'Gebratene Nudeln mit Gemüse' },
  'egg-noodles': { name: 'Eiernudeln', description: 'Gemüsenudeln mit Ei' },
  'prawn-noodles': { name: 'Garnelennudeln', description: 'Nudeln mit Garnelen' },
  'chicken-noodles': { name: 'Hühnernudeln', description: 'Nudeln mit Hähnchen' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Scharf gewürzter Fisch, serviert mit Brot' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Scharf gewürztes Hähnchen nach sri-lankischer Art' },
  'grill-chicken': { name: 'Gegrilltes Hähnchen', description: 'Gegrilltes Hähnchen, serviert mit Brot' },
  'devilled-prawns': { name: 'Devilled Prawns', description: 'Scharf gewürzte Garnelen' },
  'devilled-calamari': { name: 'Devilled Calamari', description: 'Scharf gewürzter Tintenfisch mit sri-lankischen Gewürzen' },
  'egg-omelet': { name: 'Omelett', description: 'Frisches Omelett, serviert mit Brot' },
  'chicken-sausages': { name: 'Hähnchenwürstchen', description: 'Hähnchenwürstchen mit Knoblauchsauce & Brot' },
  'potato-chips': { name: 'Kartoffelchips', description: 'Knusprige Kartoffelchips' },

  'veg-salad': { name: 'Gemüsesalat', description: 'Frischer Gemüsesalat mit leichtem Dressing' },
  'cucumber-salad': { name: 'Gurkensalat', description: 'Frischer Gurkensalat mit Kräutern' },
  'tomato-onion-salad': { name: 'Tomaten-Zwiebel-Salat', description: 'Tomaten-Zwiebel-Salat mit sri-lankischen Gewürzen' },
  'pineapple-salad': { name: 'Ananassalat', description: 'Frischer Ananassalat mit süß-scharfem Dressing' },

  'tomato-sandwich': { name: 'Tomatensandwich', description: 'Frisches Tomatensandwich mit weichem Brot' },
  'cheese-sandwich': { name: 'Käsesandwich', description: 'Klassisches Käsesandwich' },
  'egg-sandwich': { name: 'Eiersandwich', description: 'Eiersandwich mit frischem Gemüse' },
  'fish-sandwich': { name: 'Fischsandwich', description: 'Fischsandwich mit hausgemachter Sauce' },
  'chicken-sandwich': { name: 'Hähnchensandwich', description: 'Gegrilltes Hähnchensandwich' },

  tuna: { name: 'Thunfisch', description: 'Frisch gegrillter Thunfisch mit Knoblauchsauce, Brot, Gemüsesalat & Reis' },
  shark: { name: 'Hai', description: 'Gegrilltes Haifischsteak mit Knoblauchsauce, Brot, Gemüsesalat & Reis' },
  'seer-fish': { name: 'Seer Fish (Königsmakrele)', description: 'Frischer Seer Fish, gegrillt mit Knoblauchsauce' },
  calamari: { name: 'Calamari', description: 'Gegrillte Calamari, serviert mit Reis und Salat' },
  'coral-fish': { name: 'Korallenfisch', description: 'Frischer Korallenfisch, gegrillt mit Knoblauchsauce' },
  'para-fish': { name: 'Para Fish', description: 'Gegrillter Para Fish mit Gemüse und Reis' },
  prawns: { name: 'Garnelen', description: 'Frische Knoblauchgarnelen, serviert mit Salat und Reis' },
  'jumbo-prawns': { name: 'Jumbo-Garnelen', description: 'Große gegrillte Jumbo-Garnelen mit Knoblauchsauce' },
  'file-fish': { name: 'File Fish', description: 'Frischer File Fish, gegrillt mit Gemüse' },
  lobster: { name: 'Hummer', description: 'Frisch gegrillter Hummer mit Knoblauchsauce und Salat' },
  'manta-fish': { name: 'Manta-Fisch', description: 'Frischer Manta-Fisch, gegrillt mit sri-lankischen Gewürzen' },
  crab: { name: 'Krabbe', description: 'Frische Krabbe, serviert mit Knoblauchsauce und Gemüse' },
  'red-fish': { name: 'Roter Fisch', description: 'Gegrillter roter Fisch, serviert mit Reis und Salat' },
  'seafood-mix-plate': { name: 'Meeresfrüchte-Mixteller', description: 'Hummer, Garnelen, Calamari, Thunfisch, Krabbe & Hai mit Knoblauchsauce, Brot, Gemüsesalat & Reis' },

  coffee: { name: 'Kaffee', description: 'Frisch gebrühter Kaffee' },
  tea: { name: 'Tee', description: 'Sri-lankischer Tee' },
  'king-coconut': { name: 'King-Kokosnuss', description: 'Frische King-Kokosnuss' },
  'mango-juice': { name: 'Frischer Mangosaft', description: 'Frischer Mangosaft' },
};

const MENU_FR: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Soupe de légumes', description: 'Soupe de légumes fraîche servie avec du pain' },
  'noodles-soup': { name: 'Soupe de nouilles', description: 'Soupe de nouilles chaude aux légumes' },
  'tomato-soup': { name: 'Soupe de tomates', description: 'Soupe de tomates classique servie avec du pain' },
  'chicken-soup': { name: 'Soupe de poulet', description: 'Soupe de poulet aux herbes et épices' },
  'prawn-soup': { name: 'Soupe de crevettes', description: 'Soupe de fruits de mer aux crevettes fraîches' },
  'crab-soup': { name: 'Soupe de crabe', description: 'Soupe de crabe riche servie avec du pain' },
  'shark-soup': { name: 'Soupe de requin', description: 'Soupe de requin épicée, une spécialité' },
  'tuna-soup': { name: 'Soupe de thon', description: 'Soupe de thon frais aux légumes' },
  'mixed-soup': { name: 'Soupe mixte', description: 'Soupe de fruits de mer variés avec du pain' },

  'rice-curry-fish': { name: 'Riz & curry au poisson', description: "Riz accompagné de 3 curry de légumes et d'un curry de poisson" },
  'rice-curry-egg': { name: "Riz & curry à l'œuf", description: "Riz accompagné de 3 curry de légumes et d'un curry à l'œuf" },
  'rice-curry-chicken': { name: 'Riz & curry au poulet', description: "Riz accompagné de 3 curry de légumes et d'un curry de poulet" },

  'veg-fried-rice': { name: 'Riz sauté aux légumes', description: 'Riz sauté aux légumes façon sri-lankaise' },
  'egg-fried-rice': { name: "Riz sauté à l'œuf", description: "Riz sauté à l'œuf" },
  'fish-fried-rice': { name: 'Riz sauté au poisson', description: 'Riz sauté au poisson' },
  'chicken-fried-rice': { name: 'Riz sauté au poulet', description: 'Riz sauté au poulet' },
  'prawns-fried-rice': { name: 'Riz sauté aux crevettes', description: 'Riz sauté aux crevettes' },
  'seafood-fried-rice': { name: 'Riz sauté aux fruits de mer', description: 'Riz sauté aux fruits de mer variés' },

  'veg-spaghetti': { name: 'Spaghetti aux légumes', description: 'Spaghetti aux légumes frais' },
  'veg-egg-spaghetti': { name: "Spaghetti aux légumes et à l'œuf", description: "Spaghetti aux légumes avec œuf" },
  'veg-prawns-spaghetti': { name: 'Spaghetti aux légumes et crevettes', description: 'Spaghetti aux crevettes et légumes' },
  'veg-chicken-spaghetti': { name: 'Spaghetti aux légumes et poulet', description: 'Spaghetti au poulet et légumes' },

  'veg-noodles': { name: 'Nouilles aux légumes', description: 'Nouilles sautées aux légumes' },
  'egg-noodles': { name: "Nouilles à l'œuf", description: "Nouilles aux légumes avec œuf" },
  'prawn-noodles': { name: 'Nouilles aux crevettes', description: 'Nouilles aux crevettes' },
  'chicken-noodles': { name: 'Nouilles au poulet', description: 'Nouilles au poulet' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Poisson épicé façon « devilled », servi avec du pain' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Poulet épicé façon sri-lankaise' },
  'grill-chicken': { name: 'Poulet grillé', description: 'Poulet grillé servi avec du pain' },
  'devilled-prawns': { name: 'Crevettes Devilled', description: 'Crevettes épicées façon « devilled »' },
  'devilled-calamari': { name: 'Calamars Devilled', description: 'Calamars épicés aux épices sri-lankaises' },
  'egg-omelet': { name: 'Omelette', description: 'Omelette fraîche servie avec du pain' },
  'chicken-sausages': { name: 'Saucisses de poulet', description: "Saucisses de poulet à la sauce à l'ail & pain" },
  'potato-chips': { name: 'Chips de pomme de terre', description: 'Chips de pomme de terre croustillantes' },

  'veg-salad': { name: 'Salade de légumes', description: 'Salade de légumes fraîche à la vinaigrette légère' },
  'cucumber-salad': { name: 'Salade de concombre', description: 'Salade de concombre fraîche aux herbes' },
  'tomato-onion-salad': { name: 'Salade de tomates et oignons', description: 'Salade de tomates et oignons aux épices sri-lankaises' },
  'pineapple-salad': { name: "Salade d'ananas", description: "Salade d'ananas fraîche à la vinaigrette douce et épicée" },

  'tomato-sandwich': { name: 'Sandwich à la tomate', description: 'Sandwich frais à la tomate, pain moelleux' },
  'cheese-sandwich': { name: 'Sandwich au fromage', description: 'Sandwich au fromage classique' },
  'egg-sandwich': { name: "Sandwich à l'œuf", description: "Sandwich à l'œuf et légumes frais" },
  'fish-sandwich': { name: 'Sandwich au poisson', description: 'Sandwich au poisson, sauce maison' },
  'chicken-sandwich': { name: 'Sandwich au poulet', description: 'Sandwich au poulet grillé' },

  tuna: { name: 'Thon', description: "Thon grillé frais, sauce à l'ail, pain, salade de légumes & riz" },
  shark: { name: 'Requin', description: "Steak de requin grillé, sauce à l'ail, pain, salade de légumes & riz" },
  'seer-fish': { name: 'Seer Fish (thazard)', description: "Seer fish frais grillé à la sauce à l'ail" },
  calamari: { name: 'Calamars', description: 'Calamars grillés servis avec riz et salade' },
  'coral-fish': { name: 'Poisson corail', description: "Poisson corail frais grillé à la sauce à l'ail" },
  'para-fish': { name: 'Para Fish', description: 'Para fish grillé servi avec légumes et riz' },
  prawns: { name: 'Crevettes', description: "Crevettes fraîches à l'ail, servies avec salade et riz" },
  'jumbo-prawns': { name: 'Crevettes géantes', description: "Grosses crevettes géantes grillées, sauce à l'ail" },
  'file-fish': { name: 'File Fish', description: 'File fish frais grillé aux légumes' },
  lobster: { name: 'Homard', description: "Homard grillé frais, sauce à l'ail et salade" },
  'manta-fish': { name: 'Poisson manta', description: 'Poisson manta frais grillé aux épices sri-lankaises' },
  crab: { name: 'Crabe', description: "Crabe frais, sauce à l'ail et légumes" },
  'red-fish': { name: 'Poisson rouge', description: 'Poisson rouge grillé servi avec riz et salade' },
  'seafood-mix-plate': { name: 'Assiette de fruits de mer', description: "Homard, crevettes, calamars, thon, crabe & requin, sauce à l'ail, pain, salade de légumes & riz" },

  coffee: { name: 'Café', description: 'Café fraîchement infusé' },
  tea: { name: 'Thé', description: 'Thé sri-lankais' },
  'king-coconut': { name: 'Noix de coco king', description: 'Noix de coco king fraîche' },
  'mango-juice': { name: 'Jus de mangue frais', description: 'Jus de mangue frais' },
};

const MENU_IT: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Zuppa di verdure', description: 'Zuppa di verdure fresca servita con pane' },
  'noodles-soup': { name: 'Zuppa di noodles', description: 'Zuppa calda di noodles con verdure' },
  'tomato-soup': { name: 'Zuppa di pomodoro', description: 'Classica zuppa di pomodoro servita con pane' },
  'chicken-soup': { name: 'Zuppa di pollo', description: 'Zuppa di pollo con erbe e spezie' },
  'prawn-soup': { name: 'Zuppa di gamberi', description: 'Zuppa di mare con gamberi freschi' },
  'crab-soup': { name: 'Zuppa di granchio', description: 'Ricca zuppa di granchio servita con pane' },
  'shark-soup': { name: 'Zuppa di squalo', description: 'Zuppa speciale di squalo con spezie' },
  'tuna-soup': { name: 'Zuppa di tonno', description: 'Zuppa di tonno fresco con verdure' },
  'mixed-soup': { name: 'Zuppa mista', description: 'Zuppa di pesce misto con pane' },

  'rice-curry-fish': { name: 'Riso e curry con pesce', description: 'Riso con 3 curry di verdure e curry di pesce' },
  'rice-curry-egg': { name: 'Riso e curry con uovo', description: "Riso con 3 curry di verdure e curry all'uovo" },
  'rice-curry-chicken': { name: 'Riso e curry con pollo', description: 'Riso con 3 curry di verdure e curry di pollo' },

  'veg-fried-rice': { name: 'Riso saltato con verdure', description: 'Riso saltato con verdure in stile sri lankese' },
  'egg-fried-rice': { name: 'Riso saltato con uovo', description: 'Riso saltato con uovo' },
  'fish-fried-rice': { name: 'Riso saltato con pesce', description: 'Riso saltato con pesce' },
  'chicken-fried-rice': { name: 'Riso saltato con pollo', description: 'Riso saltato con pollo' },
  'prawns-fried-rice': { name: 'Riso saltato con gamberi', description: 'Riso saltato con gamberi' },
  'seafood-fried-rice': { name: 'Riso saltato ai frutti di mare', description: 'Riso saltato con frutti di mare misti' },

  'veg-spaghetti': { name: 'Spaghetti alle verdure', description: 'Spaghetti con verdure fresche' },
  'veg-egg-spaghetti': { name: 'Spaghetti alle verdure e uovo', description: 'Spaghetti alle verdure con uovo' },
  'veg-prawns-spaghetti': { name: 'Spaghetti alle verdure e gamberi', description: 'Spaghetti con gamberi e verdure' },
  'veg-chicken-spaghetti': { name: 'Spaghetti alle verdure e pollo', description: 'Spaghetti con pollo e verdure' },

  'veg-noodles': { name: 'Noodles alle verdure', description: 'Noodles saltati con verdure' },
  'egg-noodles': { name: "Noodles all'uovo", description: 'Noodles alle verdure con uovo' },
  'prawn-noodles': { name: 'Noodles ai gamberi', description: 'Noodles con gamberi' },
  'chicken-noodles': { name: 'Noodles al pollo', description: 'Noodles con pollo' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Pesce piccante speziato, servito con pane' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Pollo piccante in stile sri lankese' },
  'grill-chicken': { name: 'Pollo alla griglia', description: 'Pollo alla griglia servito con pane' },
  'devilled-prawns': { name: 'Gamberi Devilled', description: 'Gamberi piccanti speziati' },
  'devilled-calamari': { name: 'Calamari Devilled', description: 'Calamari piccanti con spezie dello Sri Lanka' },
  'egg-omelet': { name: 'Omelette', description: 'Omelette fresca servita con pane' },
  'chicken-sausages': { name: 'Salsicce di pollo', description: "Salsicce di pollo con salsa all'aglio e pane" },
  'potato-chips': { name: 'Patatine', description: 'Patatine croccanti' },

  'veg-salad': { name: 'Insalata di verdure', description: 'Insalata di verdure fresca con condimento leggero' },
  'cucumber-salad': { name: 'Insalata di cetrioli', description: 'Insalata di cetrioli fresca alle erbe' },
  'tomato-onion-salad': { name: 'Insalata di pomodoro e cipolla', description: 'Insalata di pomodoro e cipolla con spezie dello Sri Lanka' },
  'pineapple-salad': { name: 'Insalata di ananas', description: 'Insalata di ananas fresca con condimento dolce e piccante' },

  'tomato-sandwich': { name: 'Sandwich al pomodoro', description: 'Sandwich fresco al pomodoro con pane morbido' },
  'cheese-sandwich': { name: 'Sandwich al formaggio', description: 'Classico sandwich al formaggio' },
  'egg-sandwich': { name: "Sandwich all'uovo", description: 'Sandwich all\'uovo con verdure fresche' },
  'fish-sandwich': { name: 'Sandwich al pesce', description: 'Sandwich al pesce con salsa fatta in casa' },
  'chicken-sandwich': { name: 'Sandwich al pollo', description: 'Sandwich al pollo grigliato' },

  tuna: { name: 'Tonno', description: "Tonno grigliato fresco con salsa all'aglio, pane, insalata di verdure e riso" },
  shark: { name: 'Squalo', description: "Trancio di squalo grigliato con salsa all'aglio, pane, insalata di verdure e riso" },
  'seer-fish': { name: 'Seer Fish (pesce sierra)', description: "Seer fish fresco grigliato con salsa all'aglio" },
  calamari: { name: 'Calamari', description: 'Calamari grigliati serviti con riso e insalata' },
  'coral-fish': { name: 'Pesce corallo', description: "Pesce corallo fresco grigliato con salsa all'aglio" },
  'para-fish': { name: 'Para Fish', description: 'Para fish grigliato servito con verdure e riso' },
  prawns: { name: 'Gamberi', description: "Gamberi freschi all'aglio serviti con insalata e riso" },
  'jumbo-prawns': { name: 'Gamberoni', description: "Grandi gamberoni grigliati con salsa all'aglio" },
  'file-fish': { name: 'File Fish', description: 'File fish fresco grigliato con verdure' },
  lobster: { name: 'Aragosta', description: "Aragosta grigliata fresca con salsa all'aglio e insalata" },
  'manta-fish': { name: 'Pesce manta', description: 'Pesce manta fresco grigliato con spezie dello Sri Lanka' },
  crab: { name: 'Granchio', description: "Granchio fresco servito con salsa all'aglio e verdure" },
  'red-fish': { name: 'Pesce rosso', description: 'Pesce rosso grigliato servito con riso e insalata' },
  'seafood-mix-plate': { name: 'Piatto misto di mare', description: "Aragosta, gamberi, calamari, tonno, granchio e squalo con salsa all'aglio, pane, insalata di verdure e riso" },

  coffee: { name: 'Caffè', description: 'Caffè appena preparato' },
  tea: { name: 'Tè', description: 'Tè dello Sri Lanka' },
  'king-coconut': { name: 'Noce di cocco king', description: 'Noce di cocco king fresca' },
  'mango-juice': { name: 'Succo di mango fresco', description: 'Succo di mango fresco' },
};

const MENU_ES: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Sopa de verduras', description: 'Sopa de verduras fresca servida con pan' },
  'noodles-soup': { name: 'Sopa de fideos', description: 'Sopa caliente de fideos con verduras' },
  'tomato-soup': { name: 'Sopa de tomate', description: 'Clásica sopa de tomate servida con pan' },
  'chicken-soup': { name: 'Sopa de pollo', description: 'Sopa de pollo con hierbas y especias' },
  'prawn-soup': { name: 'Sopa de langostinos', description: 'Sopa de mariscos con langostinos frescos' },
  'crab-soup': { name: 'Sopa de cangrejo', description: 'Sopa cremosa de cangrejo servida con pan' },
  'shark-soup': { name: 'Sopa de tiburón', description: 'Sopa especial de tiburón con especias' },
  'tuna-soup': { name: 'Sopa de atún', description: 'Sopa de atún fresco con verduras' },
  'mixed-soup': { name: 'Sopa mixta', description: 'Sopa de mariscos variados con pan' },

  'rice-curry-fish': { name: 'Arroz y curry con pescado', description: 'Arroz con 3 currys de verduras y curry de pescado' },
  'rice-curry-egg': { name: 'Arroz y curry con huevo', description: 'Arroz con 3 currys de verduras y curry de huevo' },
  'rice-curry-chicken': { name: 'Arroz y curry con pollo', description: 'Arroz con 3 currys de verduras y curry de pollo' },

  'veg-fried-rice': { name: 'Arroz frito con verduras', description: 'Arroz frito con verduras al estilo de Sri Lanka' },
  'egg-fried-rice': { name: 'Arroz frito con huevo', description: 'Arroz frito con huevo' },
  'fish-fried-rice': { name: 'Arroz frito con pescado', description: 'Arroz frito con pescado' },
  'chicken-fried-rice': { name: 'Arroz frito con pollo', description: 'Arroz frito con pollo' },
  'prawns-fried-rice': { name: 'Arroz frito con langostinos', description: 'Arroz frito con langostinos' },
  'seafood-fried-rice': { name: 'Arroz frito con mariscos', description: 'Arroz frito con mariscos variados' },

  'veg-spaghetti': { name: 'Espaguetis con verduras', description: 'Espaguetis con verduras frescas' },
  'veg-egg-spaghetti': { name: 'Espaguetis con verduras y huevo', description: 'Espaguetis de verduras con huevo' },
  'veg-prawns-spaghetti': { name: 'Espaguetis con verduras y langostinos', description: 'Espaguetis con langostinos y verduras' },
  'veg-chicken-spaghetti': { name: 'Espaguetis con verduras y pollo', description: 'Espaguetis con pollo y verduras' },

  'veg-noodles': { name: 'Fideos con verduras', description: 'Fideos salteados con verduras' },
  'egg-noodles': { name: 'Fideos con huevo', description: 'Fideos de verduras con huevo' },
  'prawn-noodles': { name: 'Fideos con langostinos', description: 'Fideos con langostinos' },
  'chicken-noodles': { name: 'Fideos con pollo', description: 'Fideos con pollo' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Pescado picante especiado, servido con pan' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Pollo picante al estilo de Sri Lanka' },
  'grill-chicken': { name: 'Pollo a la parrilla', description: 'Pollo a la parrilla servido con pan' },
  'devilled-prawns': { name: 'Langostinos Devilled', description: 'Langostinos picantes especiados' },
  'devilled-calamari': { name: 'Calamares Devilled', description: 'Calamares picantes con especias de Sri Lanka' },
  'egg-omelet': { name: 'Tortilla de huevo', description: 'Tortilla de huevo fresca servida con pan' },
  'chicken-sausages': { name: 'Salchichas de pollo', description: 'Salchichas de pollo con salsa de ajo y pan' },
  'potato-chips': { name: 'Patatas fritas', description: 'Patatas fritas crujientes' },

  'veg-salad': { name: 'Ensalada de verduras', description: 'Ensalada de verduras fresca con aliño ligero' },
  'cucumber-salad': { name: 'Ensalada de pepino', description: 'Ensalada de pepino fresca con hierbas' },
  'tomato-onion-salad': { name: 'Ensalada de tomate y cebolla', description: 'Ensalada de tomate y cebolla con especias de Sri Lanka' },
  'pineapple-salad': { name: 'Ensalada de piña', description: 'Ensalada de piña fresca con aliño dulce y picante' },

  'tomato-sandwich': { name: 'Sándwich de tomate', description: 'Sándwich fresco de tomate con pan blando' },
  'cheese-sandwich': { name: 'Sándwich de queso', description: 'Clásico sándwich de queso' },
  'egg-sandwich': { name: 'Sándwich de huevo', description: 'Sándwich de huevo con verduras frescas' },
  'fish-sandwich': { name: 'Sándwich de pescado', description: 'Sándwich de pescado con salsa casera' },
  'chicken-sandwich': { name: 'Sándwich de pollo', description: 'Sándwich de pollo a la parrilla' },

  tuna: { name: 'Atún', description: 'Atún fresco a la parrilla con salsa de ajo, pan, ensalada de verduras y arroz' },
  shark: { name: 'Tiburón', description: 'Filete de tiburón a la parrilla con salsa de ajo, pan, ensalada de verduras y arroz' },
  'seer-fish': { name: 'Seer Fish (caballa real)', description: 'Seer fish fresco a la parrilla con salsa de ajo' },
  calamari: { name: 'Calamares', description: 'Calamares a la parrilla servidos con arroz y ensalada' },
  'coral-fish': { name: 'Pez coral', description: 'Pez coral fresco a la parrilla con salsa de ajo' },
  'para-fish': { name: 'Para Fish', description: 'Para fish a la parrilla servido con verduras y arroz' },
  prawns: { name: 'Langostinos', description: 'Langostinos frescos al ajillo servidos con ensalada y arroz' },
  'jumbo-prawns': { name: 'Langostinos jumbo', description: 'Grandes langostinos jumbo a la parrilla con salsa de ajo' },
  'file-fish': { name: 'File Fish', description: 'File fish fresco a la parrilla con verduras' },
  lobster: { name: 'Langosta', description: 'Langosta fresca a la parrilla con salsa de ajo y ensalada' },
  'manta-fish': { name: 'Pez manta', description: 'Pez manta fresco a la parrilla con especias de Sri Lanka' },
  crab: { name: 'Cangrejo', description: 'Cangrejo fresco servido con salsa de ajo y verduras' },
  'red-fish': { name: 'Pez rojo', description: 'Pez rojo a la parrilla servido con arroz y ensalada' },
  'seafood-mix-plate': { name: 'Plato mixto de mariscos', description: 'Langosta, langostinos, calamares, atún, cangrejo y tiburón con salsa de ajo, pan, ensalada de verduras y arroz' },

  coffee: { name: 'Café', description: 'Café recién hecho' },
  tea: { name: 'Té', description: 'Té de Sri Lanka' },
  'king-coconut': { name: 'Coco king', description: 'Coco king fresco' },
  'mango-juice': { name: 'Zumo de mango fresco', description: 'Zumo de mango fresco' },
};

const MENU_PL: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Zupa jarzynowa', description: 'Świeża zupa jarzynowa podawana z chlebem' },
  'noodles-soup': { name: 'Zupa z makaronem', description: 'Ciepła zupa z makaronem i warzywami' },
  'tomato-soup': { name: 'Zupa pomidorowa', description: 'Klasyczna zupa pomidorowa podawana z chlebem' },
  'chicken-soup': { name: 'Rosół z kurczaka', description: 'Zupa z kurczaka z ziołami i przyprawami' },
  'prawn-soup': { name: 'Zupa z krewetkami', description: 'Zupa owoców morza ze świeżymi krewetkami' },
  'crab-soup': { name: 'Zupa krabowa', description: 'Sycąca zupa krabowa podawana z chlebem' },
  'shark-soup': { name: 'Zupa z rekina', description: 'Specjalna zupa z rekina z przyprawami' },
  'tuna-soup': { name: 'Zupa z tuńczyka', description: 'Świeża zupa z tuńczyka z warzywami' },
  'mixed-soup': { name: 'Zupa mieszana', description: 'Zupa z mieszanych owoców morza z chlebem' },

  'rice-curry-fish': { name: 'Ryż z curry i rybą', description: 'Ryż z 3 rodzajami curry warzywnego i curry rybnym' },
  'rice-curry-egg': { name: 'Ryż z curry i jajkiem', description: 'Ryż z 3 rodzajami curry warzywnego i curry jajecznym' },
  'rice-curry-chicken': { name: 'Ryż z curry i kurczakiem', description: 'Ryż z 3 rodzajami curry warzywnego i curry z kurczaka' },

  'veg-fried-rice': { name: 'Smażony ryż z warzywami', description: 'Smażony ryż z warzywami w stylu sri lankijskim' },
  'egg-fried-rice': { name: 'Smażony ryż z jajkiem', description: 'Smażony ryż z jajkiem' },
  'fish-fried-rice': { name: 'Smażony ryż z rybą', description: 'Smażony ryż z rybą' },
  'chicken-fried-rice': { name: 'Smażony ryż z kurczakiem', description: 'Smażony ryż z kurczakiem' },
  'prawns-fried-rice': { name: 'Smażony ryż z krewetkami', description: 'Smażony ryż z krewetkami' },
  'seafood-fried-rice': { name: 'Smażony ryż z owocami morza', description: 'Smażony ryż z mieszanymi owocami morza' },

  'veg-spaghetti': { name: 'Spaghetti z warzywami', description: 'Spaghetti ze świeżymi warzywami' },
  'veg-egg-spaghetti': { name: 'Spaghetti z warzywami i jajkiem', description: 'Spaghetti warzywne z jajkiem' },
  'veg-prawns-spaghetti': { name: 'Spaghetti z warzywami i krewetkami', description: 'Spaghetti z krewetkami i warzywami' },
  'veg-chicken-spaghetti': { name: 'Spaghetti z warzywami i kurczakiem', description: 'Spaghetti z kurczakiem i warzywami' },

  'veg-noodles': { name: 'Makaron z warzywami', description: 'Smażony makaron z warzywami' },
  'egg-noodles': { name: 'Makaron z jajkiem', description: 'Makaron warzywny z jajkiem' },
  'prawn-noodles': { name: 'Makaron z krewetkami', description: 'Makaron z krewetkami' },
  'chicken-noodles': { name: 'Makaron z kurczakiem', description: 'Makaron z kurczakiem' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Pikantnie przyprawiona ryba podawana z chlebem' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Pikantny kurczak w stylu sri lankijskim' },
  'grill-chicken': { name: 'Kurczak z grilla', description: 'Kurczak z grilla podawany z chlebem' },
  'devilled-prawns': { name: 'Krewetki Devilled', description: 'Pikantnie przyprawione krewetki' },
  'devilled-calamari': { name: 'Calamari Devilled', description: 'Pikantne kalmary z przyprawami ze Sri Lanki' },
  'egg-omelet': { name: 'Omlet', description: 'Świeży omlet podawany z chlebem' },
  'chicken-sausages': { name: 'Kiełbaski z kurczaka', description: 'Kiełbaski z kurczaka w sosie czosnkowym z chlebem' },
  'potato-chips': { name: 'Frytki', description: 'Chrupiące frytki' },

  'veg-salad': { name: 'Sałatka jarzynowa', description: 'Świeża sałatka jarzynowa z lekkim dressingiem' },
  'cucumber-salad': { name: 'Sałatka z ogórka', description: 'Świeża sałatka z ogórka z ziołami' },
  'tomato-onion-salad': { name: 'Sałatka z pomidorów i cebuli', description: 'Sałatka z pomidorów i cebuli z przyprawami ze Sri Lanki' },
  'pineapple-salad': { name: 'Sałatka z ananasa', description: 'Świeża sałatka z ananasa ze słodko-pikantnym dressingiem' },

  'tomato-sandwich': { name: 'Kanapka z pomidorem', description: 'Świeża kanapka z pomidorem na miękkim pieczywie' },
  'cheese-sandwich': { name: 'Kanapka z serem', description: 'Klasyczna kanapka z serem' },
  'egg-sandwich': { name: 'Kanapka z jajkiem', description: 'Kanapka z jajkiem i świeżymi warzywami' },
  'fish-sandwich': { name: 'Kanapka z rybą', description: 'Kanapka z rybą w domowym sosie' },
  'chicken-sandwich': { name: 'Kanapka z kurczakiem', description: 'Kanapka z kurczakiem z grilla' },

  tuna: { name: 'Tuńczyk', description: 'Świeży grillowany tuńczyk w sosie czosnkowym z chlebem, sałatką jarzynową i ryżem' },
  shark: { name: 'Rekin', description: 'Grillowany stek z rekina w sosie czosnkowym z chlebem, sałatką jarzynową i ryżem' },
  'seer-fish': { name: 'Seer Fish (makrela królewska)', description: 'Świeży seer fish grillowany w sosie czosnkowym' },
  calamari: { name: 'Kalmary', description: 'Grillowane kalmary podawane z ryżem i sałatką' },
  'coral-fish': { name: 'Ryba koralowa', description: 'Świeża ryba koralowa grillowana w sosie czosnkowym' },
  'para-fish': { name: 'Para Fish', description: 'Grillowany para fish podawany z warzywami i ryżem' },
  prawns: { name: 'Krewetki', description: 'Świeże krewetki czosnkowe podawane z sałatką i ryżem' },
  'jumbo-prawns': { name: 'Krewetki jumbo', description: 'Duże grillowane krewetki jumbo w sosie czosnkowym' },
  'file-fish': { name: 'File Fish', description: 'Świeży file fish grillowany z warzywami' },
  lobster: { name: 'Homar', description: 'Świeży grillowany homar w sosie czosnkowym z sałatką' },
  'manta-fish': { name: 'Ryba manta', description: 'Świeża ryba manta grillowana z przyprawami ze Sri Lanki' },
  crab: { name: 'Krab', description: 'Świeży krab podawany w sosie czosnkowym z warzywami' },
  'red-fish': { name: 'Czerwona ryba', description: 'Grillowana czerwona ryba podawana z ryżem i sałatką' },
  'seafood-mix-plate': { name: 'Talerz owoców morza', description: 'Homar, krewetki, kalmary, tuńczyk, krab i rekin w sosie czosnkowym z chlebem, sałatką jarzynową i ryżem' },

  coffee: { name: 'Kawa', description: 'Świeżo parzona kawa' },
  tea: { name: 'Herbata', description: 'Herbata ze Sri Lanki' },
  'king-coconut': { name: 'Kokos king', description: 'Świeży kokos king' },
  'mango-juice': { name: 'Świeży sok z mango', description: 'Świeży sok z mango' },
};

const MENU_RU: Record<string, RestaurantMenuEntry> = {
  'veg-soup': { name: 'Овощной суп', description: 'Свежий овощной суп, подаётся с хлебом' },
  'noodles-soup': { name: 'Суп с лапшой', description: 'Тёплый суп с лапшой и овощами' },
  'tomato-soup': { name: 'Томатный суп', description: 'Классический томатный суп, подаётся с хлебом' },
  'chicken-soup': { name: 'Куриный суп', description: 'Куриный суп с травами и специями' },
  'prawn-soup': { name: 'Суп с креветками', description: 'Суп из морепродуктов со свежими креветками' },
  'crab-soup': { name: 'Крабовый суп', description: 'Наваристый крабовый суп, подаётся с хлебом' },
  'shark-soup': { name: 'Суп из акулы', description: 'Особый суп из акулы со специями' },
  'tuna-soup': { name: 'Суп из тунца', description: 'Свежий суп из тунца с овощами' },
  'mixed-soup': { name: 'Суп ассорти', description: 'Суп из смешанных морепродуктов с хлебом' },

  'rice-curry-fish': { name: 'Рис с карри и рыбой', description: 'Рис с 3 овощными карри и рыбным карри' },
  'rice-curry-egg': { name: 'Рис с карри и яйцом', description: 'Рис с 3 овощными карри и яичным карри' },
  'rice-curry-chicken': { name: 'Рис с карри и курицей', description: 'Рис с 3 овощными карри и куриным карри' },

  'veg-fried-rice': { name: 'Жареный рис с овощами', description: 'Жареный рис с овощами по-шри-ланкийски' },
  'egg-fried-rice': { name: 'Жареный рис с яйцом', description: 'Жареный рис с яйцом' },
  'fish-fried-rice': { name: 'Жареный рис с рыбой', description: 'Жареный рис с рыбой' },
  'chicken-fried-rice': { name: 'Жареный рис с курицей', description: 'Жареный рис с курицей' },
  'prawns-fried-rice': { name: 'Жареный рис с креветками', description: 'Жареный рис с креветками' },
  'seafood-fried-rice': { name: 'Жареный рис с морепродуктами', description: 'Жареный рис со смешанными морепродуктами' },

  'veg-spaghetti': { name: 'Спагетти с овощами', description: 'Спагетти со свежими овощами' },
  'veg-egg-spaghetti': { name: 'Спагетти с овощами и яйцом', description: 'Овощные спагетти с яйцом' },
  'veg-prawns-spaghetti': { name: 'Спагетти с овощами и креветками', description: 'Спагетти с креветками и овощами' },
  'veg-chicken-spaghetti': { name: 'Спагетти с овощами и курицей', description: 'Спагетти с курицей и овощами' },

  'veg-noodles': { name: 'Лапша с овощами', description: 'Жареная лапша с овощами' },
  'egg-noodles': { name: 'Лапша с яйцом', description: 'Овощная лапша с яйцом' },
  'prawn-noodles': { name: 'Лапша с креветками', description: 'Лапша с креветками' },
  'chicken-noodles': { name: 'Лапша с курицей', description: 'Лапша с курицей' },

  'devilled-fish': { name: 'Devilled Fish', description: 'Острая пряная рыба, подаётся с хлебом' },
  'devilled-chicken': { name: 'Devilled Chicken', description: 'Острая курица по-шри-ланкийски' },
  'grill-chicken': { name: 'Курица гриль', description: 'Курица гриль, подаётся с хлебом' },
  'devilled-prawns': { name: 'Devilled Prawns', description: 'Острые пряные креветки' },
  'devilled-calamari': { name: 'Devilled Calamari', description: 'Острые кальмары со шри-ланкийскими специями' },
  'egg-omelet': { name: 'Омлет', description: 'Свежий омлет, подаётся с хлебом' },
  'chicken-sausages': { name: 'Куриные колбаски', description: 'Куриные колбаски с чесночным соусом и хлебом' },
  'potato-chips': { name: 'Картофельные чипсы', description: 'Хрустящие картофельные чипсы' },

  'veg-salad': { name: 'Овощной салат', description: 'Свежий овощной салат с лёгкой заправкой' },
  'cucumber-salad': { name: 'Салат из огурцов', description: 'Свежий салат из огурцов с зеленью' },
  'tomato-onion-salad': { name: 'Салат из томатов с луком', description: 'Салат из томатов и лука со шри-ланкийскими специями' },
  'pineapple-salad': { name: 'Ананасовый салат', description: 'Свежий ананасовый салат со сладко-острой заправкой' },

  'tomato-sandwich': { name: 'Сэндвич с томатом', description: 'Свежий сэндвич с томатом на мягком хлебе' },
  'cheese-sandwich': { name: 'Сэндвич с сыром', description: 'Классический сэндвич с сыром' },
  'egg-sandwich': { name: 'Сэндвич с яйцом', description: 'Сэндвич с яйцом и свежими овощами' },
  'fish-sandwich': { name: 'Сэндвич с рыбой', description: 'Сэндвич с рыбой под домашним соусом' },
  'chicken-sandwich': { name: 'Сэндвич с курицей', description: 'Сэндвич с курицей гриль' },

  tuna: { name: 'Тунец', description: 'Свежий тунец на гриле с чесночным соусом, хлебом, овощным салатом и рисом' },
  shark: { name: 'Акула', description: 'Стейк из акулы на гриле с чесночным соусом, хлебом, овощным салатом и рисом' },
  'seer-fish': { name: 'Сир-фиш (королевская макрель)', description: 'Свежий сир-фиш на гриле с чесночным соусом' },
  calamari: { name: 'Кальмары', description: 'Кальмары на гриле, подаются с рисом и салатом' },
  'coral-fish': { name: 'Коралловая рыба', description: 'Свежая коралловая рыба на гриле с чесночным соусом' },
  'para-fish': { name: 'Пара-фиш', description: 'Пара-фиш на гриле с овощами и рисом' },
  prawns: { name: 'Креветки', description: 'Свежие креветки с чесноком, подаются с салатом и рисом' },
  'jumbo-prawns': { name: 'Королевские креветки', description: 'Крупные королевские креветки на гриле с чесночным соусом' },
  'file-fish': { name: 'Файл-фиш', description: 'Свежий файл-фиш на гриле с овощами' },
  lobster: { name: 'Лобстер', description: 'Свежий лобстер на гриле с чесночным соусом и салатом' },
  'manta-fish': { name: 'Рыба-манта', description: 'Свежая рыба-манта на гриле со шри-ланкийскими специями' },
  crab: { name: 'Краб', description: 'Свежий краб с чесночным соусом и овощами' },
  'red-fish': { name: 'Красная рыба', description: 'Красная рыба на гриле, подаётся с рисом и салатом' },
  'seafood-mix-plate': { name: 'Ассорти из морепродуктов', description: 'Лобстер, креветки, кальмары, тунец, краб и акула с чесночным соусом, хлебом, овощным салатом и рисом' },

  coffee: { name: 'Кофе', description: 'Свежесваренный кофе' },
  tea: { name: 'Чай', description: 'Шри-ланкийский чай' },
  'king-coconut': { name: 'Кинг-кокос', description: 'Свежий кинг-кокос' },
  'mango-juice': { name: 'Свежий манговый сок', description: 'Свежий манговый сок' },
};

export const RESTAURANTS_PAGE: Record<'en' | 'de' | 'fr' | 'it' | 'es' | 'pl' | 'ru', RestaurantPageCopy> = {
  en: {
    heroTitle: 'Sundown Beach Restaurant – Fresh Seafood & Sri Lankan Cuisine',
    heroBody: 'Discover the rich flavors of Sri Lanka in a relaxing and elegant atmosphere. Our restaurant offers freshly prepared local dishes, international favorites, and a curated selection of beverages to enhance your dining experience.',
    heroAlt: 'Luxury Restaurant in Sri Lanka',
    bullets: [
      'Traditional Sri Lankan Rice & Curry',
      'Fresh Seafood Specialties',
      'Vegetarian & Vegan Options',
      'Private Dining & Group Bookings',
    ],
    bookTable: 'Book a Table',
    ourMenu: 'OUR MENU',
    menuTitleBefore: 'Check Our',
    menuTitleHighlight: 'Sundown Menu',
    menuLabel: 'MENU',
    categories: CATEGORIES_EN,
    needHelp: 'NEED HELP?',
    contactUs: 'Contact Us',
    addressLabel: 'Address',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    openingHoursLabel: 'Opening Hours',
    openingHoursValue: 'Mon-Sun: 8:00 AM - 10:00 PM',
    menu: MENU_EN,
  },
  de: {
    heroTitle: 'Sundown Beach Restaurant – Frische Meeresfrüchte & sri-lankische Küche',
    heroBody: 'Entdecken Sie die reichen Aromen Sri Lankas in einer entspannten und eleganten Atmosphäre. Unser Restaurant bietet frisch zubereitete lokale Gerichte, internationale Favoriten und eine sorgfältig ausgewählte Getränkeauswahl für ein besonderes kulinarisches Erlebnis.',
    heroAlt: 'Luxusrestaurant in Sri Lanka',
    bullets: [
      'Traditioneller sri-lankischer Reis mit Curry',
      'Frische Meeresfrüchte-Spezialitäten',
      'Vegetarische & vegane Optionen',
      'Private Dinner & Gruppenbuchungen',
    ],
    bookTable: 'Tisch reservieren',
    ourMenu: 'UNSERE SPEISEKARTE',
    menuTitleBefore: 'Entdecken Sie unser',
    menuTitleHighlight: 'Sundown-Menü',
    menuLabel: 'MENÜ',
    categories: CATEGORIES_DE,
    needHelp: 'BRAUCHEN SIE HILFE?',
    contactUs: 'Kontaktieren Sie uns',
    addressLabel: 'Adresse',
    callUs: 'Rufen Sie uns an',
    emailUs: 'Schreiben Sie uns',
    openingHoursLabel: 'Öffnungszeiten',
    openingHoursValue: 'Mo–So: 8:00 – 22:00 Uhr',
    menu: MENU_DE,
  },
  fr: {
    heroTitle: 'Sundown Beach Restaurant – Fruits de mer frais & cuisine sri-lankaise',
    heroBody: "Découvrez les saveurs riches du Sri Lanka dans une atmosphère élégante et détendue. Notre restaurant propose des plats locaux préparés à la minute, des classiques internationaux et une sélection soignée de boissons pour sublimer votre expérience culinaire.",
    heroAlt: 'Restaurant de luxe au Sri Lanka',
    bullets: [
      'Riz et curry traditionnel sri-lankais',
      'Spécialités de fruits de mer frais',
      'Options végétariennes & véganes',
      'Dîners privés & réservations de groupe',
    ],
    bookTable: 'Réserver une table',
    ourMenu: 'NOTRE CARTE',
    menuTitleBefore: 'Découvrez notre',
    menuTitleHighlight: 'menu Sundown',
    menuLabel: 'MENU',
    categories: CATEGORIES_FR,
    needHelp: "BESOIN D'AIDE ?",
    contactUs: 'Contactez-nous',
    addressLabel: 'Adresse',
    callUs: 'Appelez-nous',
    emailUs: 'Écrivez-nous',
    openingHoursLabel: "Horaires d'ouverture",
    openingHoursValue: 'Lun-Dim : 8h00 - 22h00',
    menu: MENU_FR,
  },
  it: {
    heroTitle: 'Sundown Beach Restaurant – Pesce fresco e cucina dello Sri Lanka',
    heroBody: "Scoprite i sapori ricchi dello Sri Lanka in un'atmosfera elegante e rilassante. Il nostro ristorante propone piatti locali preparati al momento, grandi classici internazionali e una selezione curata di bevande per rendere unica la vostra esperienza culinaria.",
    heroAlt: 'Ristorante di lusso in Sri Lanka',
    bullets: [
      'Riso e curry tradizionale dello Sri Lanka',
      'Specialità di pesce fresco',
      'Opzioni vegetariane e vegane',
      'Cene private e prenotazioni di gruppo',
    ],
    bookTable: 'Prenota un tavolo',
    ourMenu: 'IL NOSTRO MENU',
    menuTitleBefore: 'Scopri il nostro',
    menuTitleHighlight: 'menu Sundown',
    menuLabel: 'MENU',
    categories: CATEGORIES_IT,
    needHelp: 'HAI BISOGNO DI AIUTO?',
    contactUs: 'Contattaci',
    addressLabel: 'Indirizzo',
    callUs: 'Chiamaci',
    emailUs: 'Scrivici',
    openingHoursLabel: 'Orari di apertura',
    openingHoursValue: 'Lun-Dom: 8:00 - 22:00',
    menu: MENU_IT,
  },
  es: {
    heroTitle: 'Sundown Beach Restaurant – Marisco fresco y cocina de Sri Lanka',
    heroBody: 'Descubra los intensos sabores de Sri Lanka en un ambiente relajado y elegante. Nuestro restaurante ofrece platos locales recién preparados, clásicos internacionales y una selección cuidada de bebidas para realzar su experiencia gastronómica.',
    heroAlt: 'Restaurante de lujo en Sri Lanka',
    bullets: [
      'Arroz con curry tradicional de Sri Lanka',
      'Especialidades de marisco fresco',
      'Opciones vegetarianas y veganas',
      'Cenas privadas y reservas de grupo',
    ],
    bookTable: 'Reservar una mesa',
    ourMenu: 'NUESTRO MENÚ',
    menuTitleBefore: 'Descubre nuestro',
    menuTitleHighlight: 'menú Sundown',
    menuLabel: 'MENÚ',
    categories: CATEGORIES_ES,
    needHelp: '¿NECESITA AYUDA?',
    contactUs: 'Contáctenos',
    addressLabel: 'Dirección',
    callUs: 'Llámenos',
    emailUs: 'Escríbanos',
    openingHoursLabel: 'Horario de apertura',
    openingHoursValue: 'Lun-Dom: 8:00 - 22:00',
    menu: MENU_ES,
  },
  pl: {
    heroTitle: 'Sundown Beach Restaurant – świeże owoce morza i kuchnia Sri Lanki',
    heroBody: 'Odkryj bogate smaki Sri Lanki w eleganckiej i relaksującej atmosferze. Nasza restauracja serwuje świeżo przygotowywane lokalne dania, międzynarodowe klasyki oraz starannie dobrany wybór napojów, które umilą Twój wieczór.',
    heroAlt: 'Luksusowa restauracja na Sri Lance',
    bullets: [
      'Tradycyjny ryż z curry po sri lankijsku',
      'Specjały ze świeżych owoców morza',
      'Opcje wegetariańskie i wegańskie',
      'Prywatne kolacje i rezerwacje grupowe',
    ],
    bookTable: 'Zarezerwuj stolik',
    ourMenu: 'NASZE MENU',
    menuTitleBefore: 'Sprawdź nasze',
    menuTitleHighlight: 'menu Sundown',
    menuLabel: 'MENU',
    categories: CATEGORIES_PL,
    needHelp: 'POTRZEBUJESZ POMOCY?',
    contactUs: 'Skontaktuj się z nami',
    addressLabel: 'Adres',
    callUs: 'Zadzwoń do nas',
    emailUs: 'Napisz do nas',
    openingHoursLabel: 'Godziny otwarcia',
    openingHoursValue: 'Pon-Nd: 8:00 - 22:00',
    menu: MENU_PL,
  },
  ru: {
    heroTitle: 'Sundown Beach Restaurant — свежие морепродукты и шри-ланкийская кухня',
    heroBody: 'Откройте для себя богатые вкусы Шри-Ланки в уютной и элегантной атмосфере. Наш ресторан предлагает свежеприготовленные местные блюда, интернациональную классику и тщательно подобранную карту напитков для незабываемого ужина.',
    heroAlt: 'Роскошный ресторан на Шри-Ланке',
    bullets: [
      'Традиционный шри-ланкийский рис с карри',
      'Фирменные блюда из свежих морепродуктов',
      'Вегетарианские и веганские блюда',
      'Приватные ужины и групповые бронирования',
    ],
    bookTable: 'Забронировать столик',
    ourMenu: 'НАШЕ МЕНЮ',
    menuTitleBefore: 'Загляните в наше',
    menuTitleHighlight: 'меню Sundown',
    menuLabel: 'МЕНЮ',
    categories: CATEGORIES_RU,
    needHelp: 'НУЖНА ПОМОЩЬ?',
    contactUs: 'Свяжитесь с нами',
    addressLabel: 'Адрес',
    callUs: 'Позвоните нам',
    emailUs: 'Напишите нам',
    openingHoursLabel: 'Часы работы',
    openingHoursValue: 'Пн-Вс: 8:00–22:00',
    menu: MENU_RU,
  },
};

/** Localized restaurant page copy with English fallback for unsupported locales (e.g. `nl`). */
export function restaurantCopy(locale: Locale): RestaurantPageCopy {
  return RESTAURANTS_PAGE[locale as keyof typeof RESTAURANTS_PAGE] ?? RESTAURANTS_PAGE.en;
}

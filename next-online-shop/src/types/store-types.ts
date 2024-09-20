import { EmbroideryItem, PopularItemProps, Category } from "./types";

export interface User {
  id: string | null;
  username: string;
  role: string;
  token: string;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface LanguageState {
  lang: string;
}

export interface CategoriesState {
  categories: Category[];
  activeCategory: number | null;
}

export interface AppState {
  user: User;
  isAuthenticated: boolean;
  categories: CategoriesState;
  products: EmbroideryItem[];
  popularProducts: EmbroideryItem[];
  loading: boolean;
  error: string | null;
  lang: LanguageState;
  theme: string;
  cart: Cart;
  selectedCategory: string | null;
}

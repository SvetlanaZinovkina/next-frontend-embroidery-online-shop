import { Dict } from "./dictionary-types";

export interface EmbroideryItem {
  id: number;
  image: string;
  price: string;
  title: string;
  is_on_sale?: boolean;
  sale_price?: string | null;
  avg_rating?: string;
  review_count?: string;
}

export interface PopularItemProps {
  embroideryItems: EmbroideryItem[];
  error: string | null;
}

export interface PopularEmbroideryProps {
  embroideryItems: EmbroideryItem[];
  dict: Dict;
}

export interface DictProps {
  dict: Dict;
}

export interface Item {
  id: string | number;
  icon: string;
  badge?: string;
  name: string;
  description?: string;
  category?: string;
  difficulty?: string;
  rating?: number | string;
}
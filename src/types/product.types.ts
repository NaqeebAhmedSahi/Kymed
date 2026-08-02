export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  description: string;
  price: number;
  discount: Discount;
  rating: number;
  category?: string;
  subcategory?: string;
  /** Slug path segments for shop URLs (category excluded). */
  pathToNode?: string[];
  /** Numeric catalog ids along the path (for filtering). */
  pathIds?: string[];
  newArrival?: boolean;
  topSelling?: boolean;
};

export interface Product {
  id: string;
  title: string;
  priceMin: number;
  priceMax: number;
  originalPrice: number;
  discountPercentage: number;
  soldCount: number;
  rating: number;
  reviewCount: number;
  sellerName: string;
  shippingCost: number;
  images: string[];
}

export interface GeminiResponse {
  text: string;
}
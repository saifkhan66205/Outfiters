export type GenderCategory = 'women' | 'men' | 'juniors' | 'sale' | 'perfumes' | 'denim';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  title: string;
  category: GenderCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  isSale?: boolean;
  isNew?: boolean;
  discountPercent?: number;
  fit: string; // e.g., 'Baggy Fit', 'Relaxed Fit', 'Oversized', 'Slim Fit', 'Boxy Fit'
  primaryImage: string;
  secondaryImage: string;
  detailImages?: string[];
  colors: ProductColor[];
  sizes: string[]; // e.g. ['XS', 'S', 'M', 'L', 'XL'] or ['28', '30', '32', '34', '36']
  description: string;
  fabricDetails: {
    material: string;
    gsm?: string;
    care: string;
    origin?: string;
  };
  rating: number;
  reviewCount: number;
  tags?: string[];
}

export interface CartItem {
  id: string; // unique item cart key (productId + size + color)
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface ReelStory {
  id: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
  category: string;
  model: string;
  taggedProducts: Product[];
}

export interface StoreLocation {
  id: string;
  name: string;
  city: 'Lahore' | 'Karachi' | 'Islamabad' | 'Rawalpindi' | 'Faisalabad' | 'Multan' | 'Peshawar';
  address: string;
  phone: string;
  timings: string;
  mall?: string;
}

export interface OrderDetails {
  orderId: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: 'cod' | 'card' | 'easypaisa' | 'jazzcash';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  createdAt: string;
  status: 'Confirmed' | 'Dispatched' | 'Out for Delivery' | 'Delivered';
}

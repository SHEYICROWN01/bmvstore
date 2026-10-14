export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'solar-panels' | 'inverters' | 'batteries' | 'cctv-cameras' | 'accessories' | 'security-systems' | 'solar-kits' | 'flood-lights';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  soldCount?: number;
  inStock: boolean;
  sku: string;
  badge?: string;
  capacityBadge?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  keyBenefits: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
  specifications: ProductSpecification[];
  features: ProductFeature[];
  boxContents: string[];
  shippingInfo: string;
  installationAvailable: boolean;
  installationFee?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  includeInstallation?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  itemCount: number;
}

export interface Brand {
  name: string;
  tagline: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  popularFor: string;
}

export interface QuoteRequestData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  propertyType: 'residential-flat' | 'residential-duplex' | 'commercial-office' | 'industrial-factory';
  targetSystem: string;
  estimatedBudget?: string;
  notes?: string;
}

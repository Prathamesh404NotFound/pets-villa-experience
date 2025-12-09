export interface Product {
  id: string;
  name: string;
  category: 'food' | 'toys' | 'accessories' | 'grooming' | 'health';
  petType: 'dogs' | 'cats' | 'birds' | 'fish' | 'small-pets' | 'all';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export const products: Product[] = [
  // Dog Products
  {
    id: 'premium-dog-food',
    name: 'Royal Canin Adult Dog Food',
    category: 'food',
    petType: 'dogs',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
    description: 'Premium nutrition for adult dogs with balanced proteins and vitamins.',
    inStock: true,
    rating: 4.8,
    reviews: 256,
    featured: true,
  },
  {
    id: 'chew-toys',
    name: 'Durable Chew Toy Set',
    category: 'toys',
    petType: 'dogs',
    price: 599,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400',
    description: 'Set of 5 durable chew toys for aggressive chewers.',
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 'grooming-brush',
    name: 'Professional Grooming Brush',
    category: 'grooming',
    petType: 'dogs',
    price: 449,
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=400',
    description: 'Self-cleaning slicker brush for all coat types.',
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 'dog-collar',
    name: 'Leather Dog Collar',
    category: 'accessories',
    petType: 'dogs',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400',
    description: 'Handcrafted genuine leather collar with brass buckle.',
    inStock: true,
    rating: 4.9,
    reviews: 167,
    featured: true,
  },
  // Cat Products
  {
    id: 'premium-cat-food',
    name: 'Whiskas Adult Cat Food',
    category: 'food',
    petType: 'cats',
    price: 899,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
    description: 'Complete nutrition for adult cats with real fish.',
    inStock: true,
    rating: 4.6,
    reviews: 312,
  },
  {
    id: 'cat-tower',
    name: 'Multi-Level Cat Tower',
    category: 'accessories',
    petType: 'cats',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
    description: '5-level cat tree with scratching posts and hideaway.',
    inStock: true,
    rating: 4.8,
    reviews: 94,
    featured: true,
  },
  {
    id: 'interactive-toys',
    name: 'Interactive Feather Wand',
    category: 'toys',
    petType: 'cats',
    price: 299,
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400',
    description: 'Retractable wand with feather attachments.',
    inStock: true,
    rating: 4.4,
    reviews: 76,
  },
  {
    id: 'cat-brush',
    name: 'Self-Cleaning Cat Brush',
    category: 'grooming',
    petType: 'cats',
    price: 549,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400',
    description: 'Gentle deshedding brush with one-click clean button.',
    inStock: true,
    rating: 4.7,
    reviews: 143,
  },
  // Bird Products
  {
    id: 'bird-cage',
    name: 'Premium Bird Cage',
    category: 'accessories',
    petType: 'birds',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400',
    description: 'Large flight cage with multiple perches and feeders.',
    inStock: true,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 'seed-mix',
    name: 'Premium Seed Mix',
    category: 'food',
    petType: 'birds',
    price: 399,
    image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400',
    description: 'Nutritious blend of seeds, fruits, and vegetables.',
    inStock: true,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 'bird-toys',
    name: 'Colorful Bird Toy Set',
    category: 'toys',
    petType: 'birds',
    price: 449,
    image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400',
    description: 'Set of 6 hanging toys with bells and mirrors.',
    inStock: true,
    rating: 4.3,
    reviews: 54,
  },
  // Fish Products
  {
    id: 'aquarium',
    name: '20 Gallon Aquarium Kit',
    category: 'accessories',
    petType: 'fish',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    description: 'Complete aquarium setup with filter, heater, and LED lights.',
    inStock: true,
    rating: 4.8,
    reviews: 112,
    featured: true,
  },
  {
    id: 'fish-food',
    name: 'Tropical Fish Flakes',
    category: 'food',
    petType: 'fish',
    price: 199,
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400',
    description: 'Color-enhancing flakes for tropical fish.',
    inStock: true,
    rating: 4.4,
    reviews: 234,
  },
  {
    id: 'water-filter',
    name: 'Quiet Power Filter',
    category: 'accessories',
    petType: 'fish',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400',
    description: '3-stage filtration for crystal clear water.',
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  // Small Pet Products
  {
    id: 'hamster-cage',
    name: 'Deluxe Hamster Habitat',
    category: 'accessories',
    petType: 'small-pets',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
    description: 'Multi-level cage with tunnels and exercise wheel.',
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 'timothy-hay',
    name: 'Premium Timothy Hay',
    category: 'food',
    petType: 'small-pets',
    price: 349,
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400',
    description: 'Fresh, hand-selected timothy hay for rabbits and guinea pigs.',
    inStock: true,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 'exercise-wheel',
    name: 'Silent Exercise Wheel',
    category: 'toys',
    petType: 'small-pets',
    price: 599,
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400',
    description: 'Ultra-quiet wheel for hamsters and mice.',
    inStock: true,
    rating: 4.5,
    reviews: 92,
  },
  // Health Products
  {
    id: 'joint-supplements',
    name: 'Joint Care Supplements',
    category: 'health',
    petType: 'dogs',
    price: 899,
    image: 'https://images.unsplash.com/photo-1587015566802-afae6ec6a1ef?w=400',
    description: 'Glucosamine and chondroitin for healthy joints.',
    inStock: true,
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 'dental-treats',
    name: 'Dental Care Treats',
    category: 'health',
    petType: 'dogs',
    price: 399,
    image: 'https://images.unsplash.com/photo-1587015566802-afae6ec6a1ef?w=400',
    description: 'Daily treats that clean teeth and freshen breath.',
    inStock: true,
    rating: 4.6,
    reviews: 267,
  },
];

export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'food', name: 'Food & Nutrition' },
  { id: 'toys', name: 'Toys & Play' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'grooming', name: 'Grooming' },
  { id: 'health', name: 'Health & Wellness' },
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductsByPetType = (petType: string) => {
  if (petType === 'all') return products;
  return products.filter(product => product.petType === petType || product.petType === 'all');
};

import { Product, ReelStory, StoreLocation } from '../types';
import womenCampaignImg from '../assets/images/outfitters_women_campaign_1790492120109.jpg';
import menStreetwearImg from '../assets/images/outfitters_men_streetwear_1790492134479.jpg';
import denimCollectionImg from '../assets/images/outfitters_denim_collection_1790492147427.jpg';
import juniorsKidsImg from '../assets/images/outfitters_juniors_kids_1790492157944.jpg';

export { womenCampaignImg, menStreetwearImg, denimCollectionImg, juniorsKidsImg };

export const PRODUCTS: Product[] = [
  {
    id: 'of-001',
    title: 'Vintage Acid Wash Heavyweight Tee',
    category: 'men',
    subcategory: 'T-Shirts & Tops',
    price: 2990,
    originalPrice: 3990,
    isSale: true,
    isNew: false,
    discountPercent: 25,
    fit: 'Oversized Boxy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#262626' },
      { name: 'Vintage Stone', hex: '#a8a29e' },
      { name: 'Faded Olive', hex: '#57534e' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Constructed from heavy 240 GSM combed cotton with an artisan vintage acid wash treatment. Features dropped shoulders, a thick 1.25" ribbed collar, and raw high-street aesthetic.',
    fabricDetails: {
      material: '100% Combed Heavy Cotton',
      gsm: '240 GSM',
      care: 'Machine wash cold inside out. Do not tumble dry.',
      origin: 'Crafted in Pakistan'
    },
    rating: 4.8,
    reviewCount: 142,
    tags: ['Bestseller', 'Heavyweight', 'Streetwear']
  },
  {
    id: 'of-002',
    title: 'Wide-Leg Carpenter Denim Jeans',
    category: 'denim',
    subcategory: 'Jeans & Denim',
    price: 5490,
    originalPrice: 6990,
    isSale: true,
    isNew: true,
    discountPercent: 21,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Vintage Light Indigo', hex: '#60a5fa' },
      { name: 'Raw Deep Blue', hex: '#1e3a8a' },
      { name: 'Washed Black', hex: '#1c1917' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Iconic Outfitters streetwear silhouette with utility hammer loop, reinforced tool pockets, and clean wide-leg draping over sneakers. Non-stretch 13.5 oz authentic cotton denim.',
    fabricDetails: {
      material: '100% Rigid Indigo Denim',
      gsm: '13.5 oz',
      care: 'Turn inside out before wash. Wash with similar colors.',
      origin: 'Denim Vault Collection'
    },
    rating: 4.9,
    reviewCount: 98,
    tags: ['Denim Vault', 'Carpenter', 'Trending']
  },
  {
    id: 'of-003',
    title: 'Tailored Minimalist Neutral Blazer',
    category: 'women',
    subcategory: 'Jackets & Blazers',
    price: 7990,
    originalPrice: 9990,
    isSale: false,
    isNew: true,
    fit: 'Oversized Tailored',
    primaryImage: womenCampaignImg,
    secondaryImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      womenCampaignImg,
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Sand Beige', hex: '#d6c7b2' },
      { name: 'Pitch Black', hex: '#0a0a0a' },
      { name: 'Oatmeal', hex: '#e7e5e4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Effortless power dressing reimagined for street aesthetic. Single-breasted front with horn-effect buttons, padded shoulders, notch lapels, and silky breathable inner lining.',
    fabricDetails: {
      material: '70% Poly-Viscose, 26% Rayon, 4% Spandex',
      care: 'Dry clean recommended. Cool iron on reverse.',
      origin: 'Outfitters Studio'
    },
    rating: 4.9,
    reviewCount: 76,
    tags: ['SS26 Edit', 'Editorial', 'New In']
  },
  {
    id: 'of-004',
    title: 'Heavyweight Utility Cargo Hooded Pullover',
    category: 'men',
    subcategory: 'Hoodies & Sweatshirts',
    price: 4990,
    originalPrice: 6490,
    isSale: true,
    isNew: false,
    discountPercent: 23,
    fit: 'Relaxed Drop Shoulder',
    primaryImage: menStreetwearImg,
    secondaryImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      menStreetwearImg,
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#374151' },
      { name: 'Military Olive', hex: '#3f4f34' },
      { name: 'Chalk White', hex: '#f3f4f6' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '380 GSM brushed fleece with oversized double-layered hood. Built-in arm utility pocket and subtle tonal embroidery on the chest.',
    fabricDetails: {
      material: '80% Cotton, 20% Polyester Heavy Fleece',
      gsm: '380 GSM',
      care: 'Gentle cycle, lay flat to dry',
      origin: 'Street Utility Lab'
    },
    rating: 4.7,
    reviewCount: 189,
    tags: ['Streetwear', 'Winter Warmth', 'Heavyweight']
  },
  {
    id: 'of-005',
    title: 'High-Rise Barrel Fit Denim',
    category: 'women',
    subcategory: 'Jeans & Denim',
    price: 4790,
    originalPrice: 5990,
    isSale: true,
    isNew: true,
    discountPercent: 20,
    fit: 'Curved Barrel Fit',
    primaryImage: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Vintage Mid Wash', hex: '#64748b' },
      { name: 'Ecru Off-White', hex: '#f5f5f4' }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    description: 'A contemporary sculpted shape that arcs at the knee and tapers slightly at the hem. 100% sustainable organic cotton with subtle whiskers.',
    fabricDetails: {
      material: '100% Organic Cotton',
      gsm: '12 oz Denim',
      care: 'Machine wash 30°C. Do not bleach.',
      origin: 'Denim Vault Collection'
    },
    rating: 4.6,
    reviewCount: 64,
    tags: ['Trending', 'Denim Vault']
  },
  {
    id: 'of-006',
    title: 'Juniors Color-Block Skater Sweatshirt',
    category: 'juniors',
    subcategory: 'Juniors Tops',
    price: 2490,
    originalPrice: 3290,
    isSale: true,
    isNew: true,
    discountPercent: 24,
    fit: 'Regular Comfy Fit',
    primaryImage: juniorsKidsImg,
    secondaryImage: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      juniorsKidsImg,
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pastel Sage & Lilac', hex: '#94a3b8' },
      { name: 'Retro Orange & Cream', hex: '#fed7aa' }
    ],
    sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y', '14Y'],
    description: 'Fun, soft, and durable for everyday playtime. Designed with child-friendly soft-touch cotton fleece and vibrant typography.',
    fabricDetails: {
      material: '90% Combed Cotton, 10% Polyester',
      gsm: '280 GSM',
      care: 'Machine wash warm, tumble dry low',
      origin: 'Juniors Club'
    },
    rating: 4.9,
    reviewCount: 52,
    tags: ['Juniors', 'Back To School']
  },
  {
    id: 'of-007',
    title: 'Noir Velvet Eau De Parfum - 100ml',
    category: 'perfumes',
    subcategory: 'Fragrances',
    price: 4990,
    originalPrice: 5990,
    isSale: false,
    isNew: true,
    fit: '100ml / 3.4 fl. oz',
    primaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Glass & Smoky Gold', hex: '#1e1b4b' }
    ],
    sizes: ['100ml'],
    description: 'An alluring blend of black pepper, smoky cedarwood, and rich amber vanilla. Outfitters signature evening fragrance with long-lasting 10+ hour sillage.',
    fabricDetails: {
      material: 'Eau De Parfum (EDP Concentrated)',
      care: 'Store away from direct sunlight and heat.',
      origin: 'Formulated in France & Packed in Pakistan'
    },
    rating: 4.9,
    reviewCount: 312,
    tags: ['Signature Scent', 'Best Seller']
  },
  {
    id: 'of-008',
    title: 'Loose Fit Parachute Cargo Pants',
    category: 'women',
    subcategory: 'Trousers & Pants',
    price: 4490,
    originalPrice: 5490,
    isSale: true,
    isNew: false,
    discountPercent: 18,
    fit: 'Parachute Relaxed',
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Concrete Gray', hex: '#64748b' },
      { name: 'Deep Midnight', hex: '#0f172a' },
      { name: 'Dusty Tan', hex: '#d4d4d4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Lightweight crisp nylon shell with elastic bungee cord toggles at the waist and ankles. 6 deep utility pockets for true street utility.',
    fabricDetails: {
      material: '100% Water-Resistant Crinkle Nylon',
      care: 'Cold wash, do not iron over trims',
      origin: 'Active Street'
    },
    rating: 4.8,
    reviewCount: 110,
    tags: ['Y2K Style', 'Parachute']
  },
  {
    id: 'of-009',
    title: 'Chunky Vulcanized Low Skate Sneakers',
    category: 'men',
    subcategory: 'Footwear',
    price: 6490,
    originalPrice: 8490,
    isSale: true,
    isNew: true,
    discountPercent: 23,
    fit: 'True to Size',
    primaryImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Panda Black & White', hex: '#0f172a' },
      { name: 'Chalk Gum Sole', hex: '#fef08a' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'Padded mesh tongue with durable suede leather mudguards and vulcanized gum rubber grip sole. Designed for both skateboarding and daily street outfits.',
    fabricDetails: {
      material: 'Genuine Suede Leather & Breathable Canvas',
      care: 'Wipe clean with damp cloth, avoid full immersion',
      origin: 'Outfitters Footwear Division'
    },
    rating: 4.7,
    reviewCount: 88,
    tags: ['Footwear', 'Skate']
  },
  {
    id: 'of-010',
    title: 'Cropped Raw Hem Denim Trucker Jacket',
    category: 'denim',
    subcategory: 'Jackets & Denim',
    price: 6990,
    originalPrice: 8990,
    isSale: true,
    isNew: true,
    discountPercent: 22,
    fit: 'Boxy Cropped',
    primaryImage: denimCollectionImg,
    secondaryImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      denimCollectionImg,
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Vintage Acid Tint', hex: '#94a3b8' },
      { name: 'Overdyed Jet Black', hex: '#18181b' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Heavy stonewashed denim with frayed raw hem, custom engraved metal shank buttons, and dual chest flap pockets. An essential layering piece.',
    fabricDetails: {
      material: '100% Cotton 14 oz Denim',
      care: 'Cold water wash inside out',
      origin: 'Denim Vault Collection'
    },
    rating: 4.9,
    reviewCount: 73,
    tags: ['Denim Vault', 'Iconic']
  },
  {
    id: 'of-011',
    title: 'Structured Ribbed Knit Co-ord Set',
    category: 'women',
    subcategory: 'Co-ord Sets',
    price: 6490,
    originalPrice: 7990,
    isSale: true,
    isNew: true,
    discountPercent: 18,
    fit: 'Slim Sculpting Fit',
    primaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Mocha Brown', hex: '#78350f' },
      { name: 'Cream Vanilla', hex: '#fef3c7' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Two-piece matching set featuring a long-sleeve sweetheart top and ankle-length ribbed split skirt. Ultra-stretchy, breathable knit texture.',
    fabricDetails: {
      material: '85% Viscose, 15% Elastane',
      care: 'Hand wash cold, dry flat',
      origin: 'Outfitters Studio'
    },
    rating: 4.9,
    reviewCount: 64,
    tags: ['Co-ord', 'Trending']
  },
  {
    id: 'of-012',
    title: 'Juniors Street Graphic Relaxed Jeans',
    category: 'juniors',
    subcategory: 'Juniors Bottoms',
    price: 3490,
    originalPrice: 4490,
    isSale: true,
    isNew: false,
    discountPercent: 22,
    fit: 'Relaxed Straight Fit',
    primaryImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?q=80&w=800&auto=format&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Medium Wash Indigo', hex: '#3b82f6' }
    ],
    sizes: ['8Y', '10Y', '12Y', '14Y', '16Y'],
    description: 'Durable cotton denim with adjustable inner elastic waistband and subtle knee distress details. Built for energetic daily wear.',
    fabricDetails: {
      material: '98% Cotton, 2% Spandex',
      care: 'Machine wash cold with like colors',
      origin: 'Juniors Club'
    },
    rating: 4.8,
    reviewCount: 38,
    tags: ['Juniors', 'Denim']
  },
  // FRAGRANCES (Total 4)
  {
    id: 'of-013',
    title: 'Azure Drift Eau De Parfum - 100ml',
    category: 'perfumes',
    subcategory: 'Fragrances',
    price: 4990,
    originalPrice: 5990,
    isSale: false,
    isNew: true,
    fit: '100ml / 3.4 fl. oz',
    primaryImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Frosted Cobalt', hex: '#1e3a8a' }
    ],
    sizes: ['100ml'],
    description: 'Crisp Mediterranean sea breeze infused with Italian bergamot, ocean driftwood, crushed mint, and white sage.',
    fabricDetails: {
      material: 'Eau De Parfum (Concentrated EDP)',
      care: 'Store away from heat and direct sunlight',
      origin: 'Formulated in France & Packed in Pakistan'
    },
    rating: 4.8,
    reviewCount: 164,
    tags: ['Fresh', 'Signature']
  },
  {
    id: 'of-014',
    title: 'Amber Oud Reserve Eau De Parfum - 100ml',
    category: 'perfumes',
    subcategory: 'Fragrances',
    price: 5490,
    originalPrice: 6490,
    isSale: true,
    isNew: true,
    discountPercent: 15,
    fit: '100ml / 3.4 fl. oz',
    primaryImage: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Smoky Amber Gold', hex: '#78350f' }
    ],
    sizes: ['100ml'],
    description: 'Rich royal Cambodian oud layered with golden amber resin, smoked cardamom, warm saffron, and Madagascar tonka bean.',
    fabricDetails: {
      material: 'Eau De Parfum (Long-lasting 12h Sillage)',
      care: 'Keep in cool environment',
      origin: 'Artisan Reserve Collection'
    },
    rating: 4.9,
    reviewCount: 220,
    tags: ['Oud', 'Bestseller']
  },
  {
    id: 'of-015',
    title: 'Santorini Bloom Eau De Parfum - 100ml',
    category: 'perfumes',
    subcategory: 'Fragrances',
    price: 4790,
    originalPrice: 5690,
    isSale: false,
    isNew: true,
    fit: '100ml / 3.4 fl. oz',
    primaryImage: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Translucent Blush', hex: '#f43f5e' }
    ],
    sizes: ['100ml'],
    description: 'Luminous solar floral profile with opening notes of neroli blossom, pink pepper, jasmine sambac, and soft cashmere musk.',
    fabricDetails: {
      material: 'Eau De Parfum',
      care: 'Avoid contact with eyes',
      origin: 'Signature Scent'
    },
    rating: 4.7,
    reviewCount: 95,
    tags: ['Floral', 'Daywear']
  },

  // JUNIORS (Total 4)
  {
    id: 'of-016',
    title: 'Juniors Heavyweight Boxy Graphic Tee',
    category: 'juniors',
    subcategory: 'Juniors Tops',
    price: 1990,
    originalPrice: 2490,
    isSale: true,
    isNew: true,
    discountPercent: 20,
    fit: 'Oversized Boxy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Chalk White', hex: '#f8fafc' },
      { name: 'Vintage Black', hex: '#18181b' }
    ],
    sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y', '14Y'],
    description: 'Constructed from durable 200 GSM combed cotton with high-density skater street typography print.',
    fabricDetails: {
      material: '100% Combed Cotton',
      gsm: '200 GSM',
      care: 'Machine wash cold inside out',
      origin: 'Juniors Street Club'
    },
    rating: 4.8,
    reviewCount: 44,
    tags: ['Graphic', 'Juniors']
  },
  {
    id: 'of-017',
    title: 'Juniors Hooded Colorblock Windbreaker',
    category: 'juniors',
    subcategory: 'Juniors Outerwear',
    price: 3790,
    originalPrice: 4790,
    isSale: true,
    isNew: true,
    discountPercent: 21,
    fit: 'Regular Comfy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Navy & Teal', hex: '#0f172a' },
      { name: 'Mustard & Charcoal', hex: '#d97706' }
    ],
    sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y', '14Y'],
    description: 'Lightweight zip-front windbreaker with breathable mesh lining, elastic cuffs, and water-repellent shell.',
    fabricDetails: {
      material: '100% Water-Resistant Nylon',
      care: 'Wipe clean or gentle machine wash',
      origin: 'Juniors Active'
    },
    rating: 4.9,
    reviewCount: 61,
    tags: ['Outerwear', 'Weatherproof']
  },

  // DENIM (Total 4-5)
  {
    id: 'of-018',
    title: 'Vintage Stonewash Loose Baggy Denim',
    category: 'denim',
    subcategory: 'Jeans & Denim',
    price: 5990,
    originalPrice: 7490,
    isSale: true,
    isNew: true,
    discountPercent: 20,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Faded Stonewash Blue', hex: '#60a5fa' },
      { name: 'Dirty Tint Blue', hex: '#3b82f6' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: '90s skate-inspired wide-leg jeans with natural authentic whiskering, deep scoop pockets, and heavy-duty brass hardware.',
    fabricDetails: {
      material: '100% Cotton 13.5 oz Denim',
      gsm: '13.5 oz',
      care: 'Wash inside out at 30°C',
      origin: 'Denim Vault Collection'
    },
    rating: 4.9,
    reviewCount: 112,
    tags: ['Denim Vault', 'Baggy']
  },
  {
    id: 'of-019',
    title: 'Raw Heavy Rigid Carpenter Denim',
    category: 'denim',
    subcategory: 'Jeans & Denim',
    price: 5790,
    originalPrice: 6990,
    isSale: true,
    isNew: true,
    discountPercent: 17,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Dark Indigo Raw', hex: '#1e3a8a' },
      { name: 'Overdyed Jet Black', hex: '#0f172a' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Authentic 14 oz unwashed denim with tonal contrast triple stitching, utility hammer loop, and carpenter side pocketing.',
    fabricDetails: {
      material: '100% Rigid Heavy Indigo Cotton',
      gsm: '14 oz',
      care: 'Dry wash or wash sparingly in cold water',
      origin: 'Denim Vault Collection'
    },
    rating: 4.8,
    reviewCount: 84,
    tags: ['Denim Vault', 'Carpenter']
  },
  {
    id: 'of-020',
    title: 'Distressed Vintage Heavy Denim Overshirt',
    category: 'denim',
    subcategory: 'Jackets & Denim',
    price: 7490,
    originalPrice: 8990,
    isSale: false,
    isNew: true,
    fit: 'Oversized Boxy Fit',
    primaryImage: denimCollectionImg,
    secondaryImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Washed Bleach Indigo', hex: '#93c5fd' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Heavyweight cotton denim overshirt with distressed collar trims, twin patch chest pockets, and custom antique nickel buttons.',
    fabricDetails: {
      material: '100% Cotton 12.5 oz Denim',
      care: 'Turn inside out before washing',
      origin: 'Denim Vault Collection'
    },
    rating: 4.8,
    reviewCount: 71,
    tags: ['Overshirt', 'Layering']
  },

  // BARREL FIT (Total 4, including Women)
  {
    id: 'of-021',
    title: 'Sculpted Pleated Barrel Trousers',
    category: 'women',
    subcategory: 'Trousers & Pants',
    price: 5290,
    originalPrice: 6490,
    isSale: true,
    isNew: true,
    discountPercent: 18,
    fit: 'Curved Barrel Fit',
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Oatmeal Twill', hex: '#e7e5e4' },
      { name: 'Deep Olive', hex: '#3f4f34' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Distinctive architectural balloon curve with knee articulation darts, high-rise tailored waistband, and cropped tapered ankles.',
    fabricDetails: {
      material: '100% Heavy Cotton Chino Twill',
      care: 'Machine wash 30°C. Cool iron.',
      origin: 'Studio Collection'
    },
    rating: 4.9,
    reviewCount: 79,
    tags: ['Barrel', 'Architectural']
  },
  {
    id: 'of-022',
    title: 'Women Raw Indigo Curved Barrel Jeans',
    category: 'women',
    subcategory: 'Jeans & Denim',
    price: 5490,
    originalPrice: 6790,
    isSale: true,
    isNew: true,
    discountPercent: 19,
    fit: 'Curved Barrel Fit',
    primaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Raw Deep Indigo', hex: '#1e3a8a' },
      { name: 'Washed Charcoal', hex: '#27272a' }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Iconic curved silhouette cut from heavyweight rigid denim that creates a structured sculptural arc through the leg.',
    fabricDetails: {
      material: '100% Rigid Cotton Denim',
      gsm: '13 oz',
      care: 'Machine wash cold inside out',
      origin: 'Denim Vault Collection'
    },
    rating: 4.8,
    reviewCount: 92,
    tags: ['Barrel', 'Denim']
  },
  {
    id: 'of-023',
    title: 'Men Washed Utility Curved Barrel Pants',
    category: 'men',
    subcategory: 'Casual Bottoms',
    price: 4990,
    originalPrice: 5990,
    isSale: false,
    isNew: true,
    fit: 'Curved Barrel Fit',
    primaryImage: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Washed Slate Gray', hex: '#475569' },
      { name: 'Dusty Tan', hex: '#d4d4d4' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Modern relaxed barrel pants engineered with curved side seams, darted knees, and slightly tapered hems that sit cleanly on sneakers.',
    fabricDetails: {
      material: '98% Cotton Twill, 2% Elastane',
      care: 'Machine wash warm',
      origin: 'Street Utility Lab'
    },
    rating: 4.7,
    reviewCount: 56,
    tags: ['Barrel', 'Men']
  },

  // TAILORED FIT (Total 4, including Women)
  {
    id: 'of-024',
    title: 'Women Wide Pleated Tailored Trousers',
    category: 'women',
    subcategory: 'Trousers & Pants',
    price: 4990,
    originalPrice: 6290,
    isSale: true,
    isNew: true,
    discountPercent: 20,
    fit: 'Tailored Fit',
    primaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Charcoal Pinstripe', hex: '#18181b' },
      { name: 'Cream Sand', hex: '#f5f5f4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'High-waisted tailored trousers featuring deep front pleats, slant pockets, and a fluid wide draping leg.',
    fabricDetails: {
      material: '68% Polyester, 28% Rayon, 4% Spandex',
      care: 'Dry clean or delicate cycle',
      origin: 'Studio Tailoring'
    },
    rating: 4.9,
    reviewCount: 104,
    tags: ['Tailored', 'Minimalist']
  },
  {
    id: 'of-025',
    title: 'Women Tailored Poplin Boxy Button-Down Shirt',
    category: 'women',
    subcategory: 'T-Shirts & Tops',
    price: 3990,
    originalPrice: 4990,
    isSale: false,
    isNew: true,
    fit: 'Tailored Fit',
    primaryImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Crisp White', hex: '#ffffff' },
      { name: 'Sky Stripe Blue', hex: '#93c5fd' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Structured high-thread-count poplin with a sharp pointed collar, clean french seams, and an oversized tailored silhouette.',
    fabricDetails: {
      material: '100% Organic Compact Cotton Poplin',
      care: 'Machine wash 40°C, warm iron',
      origin: 'Studio Essentials'
    },
    rating: 4.8,
    reviewCount: 88,
    tags: ['Tailored', 'Poplin']
  },
  {
    id: 'of-026',
    title: 'Men Single-Breasted Relaxed Tailored Jacket',
    category: 'men',
    subcategory: 'Jackets & Outerwear',
    price: 8490,
    originalPrice: 10990,
    isSale: true,
    isNew: true,
    discountPercent: 23,
    fit: 'Tailored Fit',
    primaryImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Midnight Charcoal', hex: '#18181b' },
      { name: 'Taupe Khaki', hex: '#a8a29e' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Unstructured tailored silhouette with soft shoulders, double welt pockets, horn buttons, and breathable partial lining.',
    fabricDetails: {
      material: '65% Poly-Viscose, 30% Wool Blend, 5% Spandex',
      care: 'Dry clean only',
      origin: 'Tailored Street'
    },
    rating: 4.9,
    reviewCount: 67,
    tags: ['Tailored', 'Suiting']
  },

  // BAGGY FIT (Total 4-5, including Women)
  {
    id: 'of-027',
    title: 'Women Vintage Wash Baggy Denim Jeans',
    category: 'women',
    subcategory: 'Jeans & Denim',
    price: 5290,
    originalPrice: 6590,
    isSale: true,
    isNew: true,
    discountPercent: 20,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Vintage Acid Tint', hex: '#94a3b8' },
      { name: 'Light Indigo Ice', hex: '#bfdbfe' }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Authentic 90s skater baggy cut with relaxed low-slung rise, generous thigh room, and full puddling hems over sneakers.',
    fabricDetails: {
      material: '100% Cotton 12.8 oz Denim',
      care: 'Turn inside out, cold machine wash',
      origin: 'Denim Vault Collection'
    },
    rating: 4.9,
    reviewCount: 138,
    tags: ['Baggy', 'Trending']
  },
  {
    id: 'of-028',
    title: 'Women Multi-Pocket Baggy Skate Cargo Pants',
    category: 'women',
    subcategory: 'Trousers & Pants',
    price: 4990,
    originalPrice: 5990,
    isSale: false,
    isNew: true,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Utility Olive', hex: '#3f4f34' },
      { name: 'Jet Black', hex: '#0f172a' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Heavy duty cotton canvas cargos with 8 functional pockets, ankle cinch ties, and wide baggy skate fit.',
    fabricDetails: {
      material: '100% Heavy Washed Cotton Canvas',
      care: 'Machine wash warm, do not bleach',
      origin: 'Street Utility Lab'
    },
    rating: 4.8,
    reviewCount: 94,
    tags: ['Baggy', 'Cargo']
  },
  {
    id: 'of-029',
    title: 'Men Overdyed Black Raw Hem Baggy Jeans',
    category: 'men',
    subcategory: 'Jeans & Denim',
    price: 5690,
    originalPrice: 7190,
    isSale: true,
    isNew: true,
    discountPercent: 21,
    fit: 'Relaxed Baggy Fit',
    primaryImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Overdyed Jet Black', hex: '#18181b' },
      { name: 'Washed Charcoal', hex: '#3f3f46' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Deep overdyed black denim with raw cut frayed hem, loose slouchy drape, and extra leg volume for skate sneakers.',
    fabricDetails: {
      material: '100% Rigid Heavy Cotton Denim',
      gsm: '13.5 oz',
      care: 'Wash separately in cold water',
      origin: 'Denim Vault Collection'
    },
    rating: 4.9,
    reviewCount: 119,
    tags: ['Baggy', 'Men']
  }
];

export const REEL_STORIES: ReelStory[] = [
  {
    id: 'reel-1',
    title: 'THE STREET UTILITY EDIT // LAHORE NIGHTS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-city-street-at-night-42207-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    category: 'Men Streetwear',
    model: '@zaid_ali',
    taggedProducts: [PRODUCTS[0], PRODUCTS[1], PRODUCTS[8]]
  },
  {
    id: 'reel-2',
    title: 'SS26 MINIMALIST OVERSIZED TAILORING',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-turtleneck-in-a-studio-41793-large.mp4',
    posterUrl: womenCampaignImg,
    category: 'Women Collection',
    model: '@aiman.vogue',
    taggedProducts: [PRODUCTS[2], PRODUCTS[7], PRODUCTS[10]]
  },
  {
    id: 'reel-3',
    title: 'THE DENIM VAULT // VINTAGE WASHES',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-with-cool-lighting-41804-large.mp4',
    posterUrl: denimCollectionImg,
    category: 'Denim Vault',
    model: '@farhan.outfits',
    taggedProducts: [PRODUCTS[1], PRODUCTS[9], PRODUCTS[4]]
  },
  {
    id: 'reel-4',
    title: 'JUNIORS HIGH ENERGY PLAY EDIT',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-little-girl-dancing-in-a-room-full-of-sunlight-41584-large.mp4',
    posterUrl: juniorsKidsImg,
    category: 'Juniors',
    model: '@outfittersjuniors',
    taggedProducts: [PRODUCTS[5], PRODUCTS[11]]
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'store-1',
    name: 'Outfitters Flagship Packages Mall',
    city: 'Lahore',
    mall: 'Packages Mall, Ground Floor, Gate 4',
    address: 'Walton Road, Gulshan Colony, Lahore, Punjab',
    phone: '+92 42 3830 3300',
    timings: '11:00 AM - 11:00 PM (Daily)'
  },
  {
    id: 'store-2',
    name: 'Outfitters MM Alam Road',
    city: 'Lahore',
    mall: 'High-Street Standalone Flagship',
    address: 'MM Alam Road, Block C2, Gulberg III, Lahore',
    phone: '+92 42 3578 9801',
    timings: '11:00 AM - 11:30 PM (Daily)'
  },
  {
    id: 'store-3',
    name: 'Outfitters Dolmen Mall Clifton',
    city: 'Karachi',
    mall: 'Dolmen Mall Clifton, 1st Floor',
    address: 'Marine Drive, Block 4, Clifton, Karachi, Sindh',
    phone: '+92 21 3529 7800',
    timings: '11:00 AM - 11:30 PM (Fri-Sat until Midnight)'
  },
  {
    id: 'store-4',
    name: 'Outfitters Centaurus Mall',
    city: 'Islamabad',
    mall: 'The Centaurus Mall, 2nd Floor',
    address: 'Jinnah Avenue, F-8/4, Islamabad',
    phone: '+92 51 270 1200',
    timings: '11:00 AM - 11:00 PM'
  },
  {
    id: 'store-5',
    name: 'Outfitters Lucky One Mall',
    city: 'Karachi',
    mall: 'Lucky One Mall, Upper Ground Floor',
    address: 'LA-2/B, Block 21, Main Rashid Minhas Rd, Karachi',
    phone: '+92 21 3632 8900',
    timings: '11:00 AM - 11:00 PM'
  },
  {
    id: 'store-6',
    name: 'Outfitters D-Ground',
    city: 'Faisalabad',
    mall: 'High Street Store',
    address: 'Batala Colony, D-Ground, Faisalabad',
    phone: '+92 41 854 4421',
    timings: '11:30 AM - 11:00 PM'
  }
];

export const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-city-street-at-night-42207-large.mp4";

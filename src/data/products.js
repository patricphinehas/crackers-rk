// Mock product data for demonstration purposes
const products = [
  {
    id: 1,
    name: "Premium Diwali Gift Box",
    category: "Gift Packs & Novelties",
    price: 49.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1607494628003-f4b6d5ba3886?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Elevate your Diwali celebrations with our Premium Gift Box, a luxurious collection of hand-selected crackers from trusted manufacturers. This elegant assortment features a perfect balance of visual spectacles and sound effects, designed to create unforgettable festive moments with family and friends. Each box is meticulously packaged in traditional motifs with gold-embossed details, making it an impressive gift that honors the spirit of the Festival of Lights.",
    rating: 4.8,
    reviews: 124,
    stock: 50,
    features: [
      "Includes 10 different types of crackers",
      "Elegant packaging with traditional designs",
      "Safety instructions included",
      "Perfect for family celebrations"
    ],
    relatedProducts: [2, 3, 5]
  },
  {
    id: 2,
    name: "Sparklers Pack",
    category: "Sparklers",
    price: 12.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1604548530945-f483e0839b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Transform ordinary evenings into magical moments with our premium Sparklers Pack. Each pack contains 20 hand-crafted sparklers that produce vibrant, multi-colored sparks with minimal smoke. These long-lasting sparklers burn for a full 60 seconds, creating mesmerizing light patterns perfect for celebrations, photography backgrounds, or creating joyful memories with children. Made with high-quality materials for consistent performance and enhanced safety.",
    rating: 4.5,
    reviews: 89,
    stock: 200,
    features: [
      "20 sparklers per pack",
      "Multiple colors available",
      "60-second burn time",
      "Low smoke emission"
    ],
    relatedProducts: [1, 4, 6]
  },
  {
    id: 3,
    name: "Ground Chakra Set",
    category: "Chakkars & Spinners",
    price: 19.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1635168810897-9e2a8a9f6b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Experience the hypnotic beauty of our Ground Chakra Set, featuring 5 premium spinning fireworks that create dazzling circular patterns of light. Each chakra is carefully engineered to spin rapidly while emitting a cascade of vibrant, multi-colored sparks that radiate outward in perfect symmetry. These ground-based items are ideal for driveways, patios, or any flat surface, providing a safe yet spectacular visual experience that captivates viewers of all ages.",
    rating: 4.2,
    reviews: 56,
    stock: 75,
    features: [
      "5 different chakra designs",
      "Spins and emits colorful sparks",
      "Safe for children under adult supervision",
      "Lasts for approximately 45 seconds each"
    ],
    relatedProducts: [1, 5, 8]
  },
  {
    id: 4,
    name: "Sky Rockets Assortment",
    category: "Rockets & Aerial Fireworks",
    price: 29.99,
    discount: 5,
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Reach for the stars with our Sky Rockets Assortment, featuring 10 premium aerial fireworks that soar up to 100 feet before erupting into breathtaking displays of color and light. Each rocket in this carefully curated collection offers a unique burst pattern—from chrysanthemums and willows to crossettes and multi-break effects—creating a professional-quality skyshow from your own backyard. The advanced launch system ensures reliable performance while maintaining the highest safety standards.",
    rating: 4.7,
    reviews: 112,
    stock: 60,
    features: [
      "10 different rocket varieties",
      "Heights ranging from 50-100 feet",
      "Colorful aerial displays",
      "Easy launch mechanism"
    ],
    relatedProducts: [2, 6, 9]
  },
  {
    id: 5,
    name: "Flower Pots Pack",
    category: "Flower Pots & Fountains",
    price: 24.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1635168811010-2d768c20bd3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Bring your celebrations to life with our exquisite Flower Pots Pack, featuring 8 meticulously crafted ground fountains that erupt into magnificent columns of colored sparks. Each pot begins with a gentle shower of golden sparks before building to a crescendo of vibrant colors reaching heights of up to 15 feet. The extended burn time of 30-45 seconds per pot creates a sustained spectacle that serves as the perfect centerpiece for any outdoor gathering or festival celebration.",
    rating: 4.4,
    reviews: 78,
    stock: 90,
    features: [
      "8 flower pots per pack",
      "Multiple color variations",
      "Fountain-like display",
      "Duration of 30-45 seconds each"
    ],
    relatedProducts: [3, 7, 10]
  },
  {
    id: 6,
    name: "Kids Safety Crackers Set",
    category: "Sound Crackers",
    price: 15.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Introduce your little ones to the joy of celebrations with our Kids Safety Crackers Set, specially designed with child safety as the top priority. This thoughtfully curated collection features low-noise crackers that provide all the visual excitement without the startling sounds that can frighten young children. Made with non-toxic materials and reduced powder content, these crackers produce beautiful visual effects while minimizing smoke. Each set includes child-sized safety gloves and an illustrated guide teaching proper handling techniques.",
    rating: 4.9,
    reviews: 156,
    stock: 120,
    features: [
      "Low noise level",
      "No harmful chemicals",
      "Easy to use for children",
      "Includes safety gloves and instructions"
    ],
    relatedProducts: [2, 4, 8]
  },
  {
    id: 7,
    name: "Traditional Crackers Bundle",
    category: "Sound Crackers",
    price: 39.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1635325777353-37f3a9a07f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Reconnect with the authentic spirit of Diwali through our Traditional Crackers Bundle, featuring 15 time-honored varieties that have illuminated celebrations for generations. Crafted using traditional techniques passed down through families of skilled artisans, these crackers deliver the classic sights, sounds, and sensations that evoke cherished memories. From the distinctive crackle of bijli crackers to the rhythmic bursts of laadi strings, this collection preserves cultural heritage while meeting modern safety standards.",
    rating: 4.6,
    reviews: 92,
    stock: 40,
    features: [
      "Assortment of 15 traditional varieties",
      "Authentic manufacturing process",
      "Classic designs and effects",
      "Nostalgic experience for elders"
    ],
    relatedProducts: [1, 5, 9]
  },
  {
    id: 8,
    name: "Eco-Friendly Crackers Pack",
    category: "Gift Packs & Novelties",
    price: 34.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1635325777353-37f3a9a07f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "Celebrate responsibly with our Eco-Friendly Crackers Pack, an innovative collection that delivers all the festive joy while minimizing environmental impact. These next-generation crackers utilize green chemistry principles to reduce particulate emissions by up to 30% and noise levels by 40% compared to conventional options. Manufactured using recycled paper and biodegradable materials, each item is designed to break down naturally after use. Perfect for environmentally conscious families who don't want to compromise on celebration quality.",
    rating: 4.3,
    reviews: 67,
    stock: 85,
    features: [
      "Low pollution emission",
      "Reduced noise levels",
      "Made from recycled materials",
      "Environmentally conscious choice"
    ],
    relatedProducts: [3, 6, 10]
  },
  {
    id: 9,
    name: "Aerial Shower Crackers",
    category: "Rockets & Aerial Fireworks",
    price: 27.99,
    discount: 5,
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "A set of 6 aerial crackers that create beautiful shower effects in the night sky.",
    rating: 4.5,
    reviews: 83,
    stock: 55,
    features: [
      "6 aerial crackers per set",
      "Silver and golden shower effects",
      "Height of approximately 80 feet",
      "Spectacular night display"
    ],
    relatedProducts: [4, 7, 10]
  },
  {
    id: 10,
    name: "Celebration Complete Box",
    category: "Gift Packs & Novelties",
    price: 59.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1607494628003-f4b6d5ba3886?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description: "A comprehensive box containing a variety of crackers for a complete celebration experience.",
    rating: 4.8,
    reviews: 145,
    stock: 30,
    features: [
      "Contains 25+ different items",
      "Mix of ground and aerial crackers",
      "Includes sparklers and flower pots",
      "Perfect for the entire festival period"
    ],
    relatedProducts: [1, 5, 9]
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getRelatedProducts = (productId) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return product.relatedProducts.map(id => getProductById(id));
};

export default products;
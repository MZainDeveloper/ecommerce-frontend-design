// Product data for the e-commerce site
import watch from "/8.jpg";
import camera from "/6.jpg";
import jug from "/10.jpg";
import laptop from "/7.jpg";
import mobile from "/3.jpg";
import securityCamera from "/tech/camera-2.png";
import graphicCard from "/tech/gpu.png";
import ipad from "/tech/2.jpg";
import blender from "/interior/8.jpg";
// Reusing some images for new products
import coffeeMaker from "/tech/7.jpg";
import airConditioner from "/tech/8.jpg";
import vacuumCleaner from "/tech/9.jpg";
import kitchenMixer from "/interior/1.jpg";
import smartLighting from "/interior/2.jpg";
import foodProcessor from "/interior/3.jpg";
import toaster from "/interior/4.jpg";
import microwaveOven from "/interior/5.jpg";
import desk from "/interior/7.jpg";

// Main products data array
export const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 249.99,
    image: watch,
    category: "Electronics",
    brand: "Apple",
    rating: 4.5,
    features: ["Waterproof", "Heart Rate Monitor", "GPS"],
    description: "Latest generation smart watch with all premium features",
    discount: 10,
    inStock: true,
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    price: 799.99,
    image: camera,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.8,
    features: ["24MP", "4K Video", "Wireless"],
    description: "Professional grade camera for photography enthusiasts",
    inStock: true,
  },
  {
    id: 3,
    name: "Electric Kettle",
    price: 37.5,
    image: jug,
    category: "Home Appliances",
    brand: "Lenovo",
    rating: 4.2,
    features: ["Fast Boiling", "Auto Shutoff", "Temperature Control"],
    description: "Quick boiling electric kettle for your kitchen",
    discount: 15,
    inStock: true,
  },
  {
    id: 4,
    name: "Ultrabook Laptop",
    price: 1299.99,
    image: laptop,
    category: "Electronics",
    brand: "Huawei",
    rating: 4.7,
    features: ["16GB RAM", "512GB SSD", "Intel i7"],
    description: "Ultra-thin, powerful laptop for professionals",
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Smartphone",
    price: 899.99,
    image: mobile,
    category: "Mobile accessory",
    brand: "Apple",
    rating: 4.9,
    features: ["6.7 inch OLED", "Triple Camera", "5G"],
    description: "Flagship smartphone with cutting-edge features",
    discount: 5,
    inStock: true,
  },
  {
    id: 6,
    name: "Security Camera System",
    price: 399.99,
    image: securityCamera,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.3,
    features: ["HD Video", "Night Vision", "Motion Detection"],
    description: "Complete home security camera system",
    inStock: false,
  },
  {
    id: 7,
    name: "High-End GPU",
    price: 1899.99,
    image: graphicCard,
    category: "Electronics",
    brand: "Pocco",
    rating: 4.9,
    features: ["16GB VRAM", "Ray Tracing", "HDMI 2.1"],
    description: "Powerful graphics card for gaming and content creation",
    discount: 2,
    inStock: true,
  },
  {
    id: 8,
    name: "Tablet Pro",
    price: 849.99,
    image: ipad,
    category: "Electronics",
    brand: "Apple",
    rating: 4.6,
    features: ["10.9 inch", "128GB", "Liquid Retina"],
    description: "Professional tablet for creative work and entertainment",
    inStock: true,
  },
  {
    id: 9,
    name: "Blender Plus",
    price: 129.99,
    image: blender,
    category: "Home Appliances",
    brand: "Huawei",
    rating: 4.1,
    features: ["1000W", "Multiple Speeds", "Glass Jar"],
    description: "Powerful blender for smoothies and food preparation",
    discount: 20,
    inStock: true,
  },

  {
    id: 14,
    name: "Coffee Maker Pro",
    price: 149.99,
    image: coffeeMaker,
    category: "Home Appliances",
    brand: "Pocco",
    rating: 4.2,
    features: ["Programmable", "Thermal Carafe", "Auto Shutoff"],
    description: "Advanced coffee maker with multiple brewing options",
    discount: 12,
    inStock: true,
  },
  {
    id: 15,
    name: "Smart Air Conditioner",
    price: 549.99,
    image: airConditioner,
    category: "Home Appliances",
    brand: "Huawei",
    rating: 4.5,
    features: ["Wi-Fi Control", "Energy Efficient", "Quiet Operation"],
    description:
      "Smart air conditioner with app control and energy-saving modes",
    inStock: true,
  },
  {
    id: 16,
    name: "Vacuum Cleaner",
    price: 299.99,
    image: vacuumCleaner,
    category: "Home Appliances",
    brand: "Samsung",
    rating: 4.4,
    features: ["Smart Mapping", "HEPA Filter", "Auto Charging"],
    description: "Clean entire room",
    discount: 8,
    inStock: true,
  },
  {
    id: 17,
    name: "Stand Mixer",
    price: 249.99,
    image: kitchenMixer,
    category: "Home Appliances",
    brand: "Pocco",
    rating: 4.8,
    features: ["10 Speed Settings", "Tilt-Head Design", "Multiple Attachments"],
    description: "Professional-grade stand mixer for all your baking needs",
    inStock: false,
  },
  {
    id: 18,
    name: "Smart LED Lighting Kit",
    price: 79.99,
    image: smartLighting,
    category: "Modern tech",
    brand: "Apple",
    rating: 4.3,
    features: ["Color Changing", "Voice Control", "Scheduling"],
    description: "Smart lighting system with millions of color options",
    discount: 10,
    inStock: true,
  },
  {
    id: 19,
    name: "Food Processor",
    price: 119.99,
    image: foodProcessor,
    category: "Home Appliances",
    brand: "Lenovo",
    rating: 4.1,
    features: ["Multiple Blades", "8-Cup Capacity", "Dishwasher Safe"],
    description: "Versatile food processor for all your kitchen prep needs",
    inStock: true,
  },
  {
    id: 20,
    name: "4-Slice Toaster",
    price: 59.99,
    image: toaster,
    category: "Home Appliances",
    brand: "Huawei",
    rating: 4.0,
    features: ["Dual Controls", "Extra-Wide Slots", "6 Browning Settings"],
    description: "Modern 4-slice toaster with versatile toasting options",
    discount: 5,
    inStock: true,
  },
  {
    id: 21,
    name: "Microwave Oven",
    price: 129.99,
    image: microwaveOven,
    category: "Home Appliances",
    brand: "Samsung",
    rating: 4.2,
    features: ["1000W", "Sensor Cooking", "Child Lock"],
    description: "Powerful microwave with smart cooking presets",
    inStock: true,
  },
  {
    id: 22,
    name: "Adjustable Computer Desk",
    price: 199.99,
    image: desk,
    category: "Modern tech",
    brand: "Pocco",
    rating: 4.5,
    features: ["Height Adjustable", "Cable Management", "Ergonomic Design"],
    description: "Modern computer desk with adjustable height settings",
    discount: 15,
    inStock: true,
  },

  {
    id: 24,
    name: "Smart Home Hub",
    price: 149.99,
    image: securityCamera,
    category: "Modern tech",
    brand: "Samsung",
    rating: 4.6,
    features: ["Voice Control", "Device Compatibility", "5G"],
    description: "Central hub for controlling all your smart home devices",
    discount: 5,
    inStock: true,
  },
  {
    id: 25,
    name: "Professional Webcam",
    price: 89.99,
    image: camera,
    category: "Electronics",
    brand: "Huawei",
    rating: 4.3,
    features: ["1080p HD", "Auto Focus", "Noise-Cancelling Microphone"],
    description: "High-definition webcam for professional video conferencing",
    inStock: true,
  },
  {
    id: 26,
    name: "Digital Drawing Tablet",
    price: 199.99,
    image: ipad,
    category: "Electronics",
    brand: "Lenovo",
    rating: 4.7,
    features: ["Pressure Sensitivity", "Wireless", "HD Screen"],
    description:
      "Professional drawing tablet for digital artists and designers",
    discount: 10,
    inStock: true,
  },
  {
    id: 27,
    name: "Portable Power Bank",
    price: 49.99,
    image: mobile,
    category: "Mobile accessory",
    brand: "Apple",
    rating: 4.5,
    features: ["Fast Charging", "20,000mAh", "Multiple Ports"],
    description: "High-capacity power bank for charging on the go",
    inStock: true,
  },
  {
    id: 28,
    name: "Gaming Mechanical Keyboard",
    price: 129.99,
    image: graphicCard,
    category: "Electronics",
    brand: "Lenovo",
    rating: 4.8,
    features: ["RGB Lighting", "Mechanical Switches", "Programmable Keys"],
    description: "Professional gaming keyboard with customizable features",
    discount: 8,
    inStock: true,
  },
];

// Helper function to filter products by category
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

// Helper function to filter products by brand
export const getProductsByBrand = (brand) => {
  return products.filter((product) => product.brand === brand);
};

// Helper function to filter products by feature
export const getProductsByFeature = (feature) => {
  return products.filter((product) => product.features.includes(feature));
};

// Helper function to filter products by price range
export const getProductsByPriceRange = (minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

// Helper function to get products with discount
export const getDiscountedProducts = () => {
  return products.filter((product) => product.discount);
};

// Helper function to get products in stock
export const getInStockProducts = () => {
  return products.filter((product) => product.inStock);
};

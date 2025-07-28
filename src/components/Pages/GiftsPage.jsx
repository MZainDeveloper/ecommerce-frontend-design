import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/productData";

const GiftsPage = () => {
  const { addToCart } = useCart();
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [favorites, setFavorites] = useState(new Set());
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [giftCategories, setGiftCategories] = useState([
    { name: "Birthday Gifts", count: 156, icon: "🎂" },
    { name: "Anniversary Gifts", count: 89, icon: "💝" },
    { name: "Holiday Gifts", count: 234, icon: "🎄" },
    { name: "Corporate Gifts", count: 67, icon: "💼" },
    { name: "Wedding Gifts", count: 123, icon: "💒" }
  ]);
  const [filters, setFilters] = useState({
    categories: new Set(),
    brands: new Set(),
    features: new Set(),
    priceRange: [0, 2000],
    condition: "any",
    rating: 0,
    inStock: false
  });

  const [sidebarSections, setSidebarSections] = useState({
    category: { expanded: true, showAll: false },
    brands: { expanded: true, showAll: false },
    features: { expanded: true, showAll: false },
    priceRange: { expanded: true },
    condition: { expanded: true },
    ratings: { expanded: true }
  });

  const categories = [
    "Mobile accessory",
    "Electronics", 
    "Smartphones",
    "Modern tech",
    "Home Appliances",
    "Computers",
    "Gaming",
    "Audio & Video"
  ];
  
  const brands = [
    "Samsung",
    "Apple", 
    "Huawei",
    "Pocco",
    "Lenovo",
    "Sony",
    "LG",
    "Microsoft"
  ];

  const features = [
    "Metallic",
    "Plastic cover",
    "8GB Ram",
    "Super power",
    "Large Memory",
    "Wireless",
    "Waterproof",
    "Fast Charging"
  ];

  const conditions = [
    { value: "any", label: "Any" },
    { value: "new", label: "Brand new" },
    { value: "refurbished", label: "Refurbished" },
    { value: "used", label: "Old items" }
  ];

  const pricePresets = [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $500", min: 100, max: 500 },
    { label: "$500 - $1000", min: 500, max: 1000 },
    { label: "Over $1000", min: 1000, max: 2000 }
  ];

  // Toggle sidebar section
  const toggleSection = (section) => {
    setSidebarSections(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        expanded: !prev[section].expanded
      }
    }));
  };

  // Toggle "See all" for sections
  const toggleSeeAll = (section) => {
    setSidebarSections(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        showAll: !prev[section].showAll
      }
    }));
  };

  // Filter and search products
  useEffect(() => {
    let filtered = products;

    // Category filter
    if (filters.categories.size > 0) {
      filtered = filtered.filter(product => 
        filters.categories.has(product.category)
      );
    }

    // Brand filter
    if (filters.brands.size > 0) {
      filtered = filtered.filter(product => 
        filters.brands.has(product.brand)
      );
    }

    // Features filter
    if (filters.features.size > 0) {
      filtered = filtered.filter(product => 
        product.features && product.features.some(feature => 
          filters.features.has(feature)
        )
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating);
    }

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const newCategories = new Set(prev.categories);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return { ...prev, categories: newCategories };
    });
  };

  const handleBrandChange = (brand) => {
    setFilters(prev => {
      const newBrands = new Set(prev.brands);
      if (newBrands.has(brand)) {
        newBrands.delete(brand);
      } else {
        newBrands.add(brand);
      }
      return { ...prev, brands: newBrands };
    });
  };

  const handleFeatureChange = (feature) => {
    setFilters(prev => {
      const newFeatures = new Set(prev.features);
      if (newFeatures.has(feature)) {
        newFeatures.delete(feature);
      } else {
        newFeatures.add(feature);
      }
      return { ...prev, features: newFeatures };
    });
  };

  const handlePricePreset = (min, max) => {
    setFilters(prev => ({ ...prev, priceRange: [min, max] }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const ProductCard = ({ product }) => {
    const isFavorited = favorites.has(product.id);
    const discountedPrice = product.discount 
      ? product.price * (1 - product.discount / 100) 
      : product.price;

    const handleAddToCartClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleAddToCart(product);
    };

    if (viewMode === "list") {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex gap-4">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain bg-gray-50 rounded-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <Link 
                  to="/description" 
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                >
                  {product.name}
                </Link>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {isFavorited ? (
                    <FaHeart className="text-red-500" size={18} />
                  ) : (
                    <FaRegHeart className="text-gray-400" size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">154 orders</span>
                {product.inStock && (
                  <span className="text-sm text-green-600 font-medium">Free Shipping</span>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
              </p>

              <div className="flex gap-2">
                <Link
                  to="/description"
                  className="inline-block text-blue-600 text-sm font-medium hover:underline"
                >
                  View details
                </Link>
                <button
                  onClick={handleAddToCartClick}
                  className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
        <div className="relative">
          <Link to="/description">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
          
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                -{product.discount}%
              </span>
            )}
            {product.inStock && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                In Stock
              </span>
            )}
          </div>

          <button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50"
          >
            {isFavorited ? (
              <FaHeart className="text-red-500" size={16} />
            ) : (
              <FaRegHeart className="text-gray-400" size={16} />
            )}
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
          </div>

          <Link 
            to="/description" 
            className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2 mb-2"
          >
            {product.name}
          </Link>

          <p className="text-xs text-gray-500 mb-2">{product.brand}</p>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button 
            onClick={handleAddToCartClick}
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-0 md:px-16 lg:px-24 py-2 md:py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 md:mb-6 px-4 md:px-0">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Gift boxes</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Enhanced Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 px-4 lg:px-0">
            <div className="bg-white md:rounded-lg shadow-sm lg:sticky lg:top-6">
              {/* Category Filter */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('category')}
                >
                  <h3 className="font-medium text-gray-900">Category</h3>
                  {sidebarSections.category.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.category.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      {categories.slice(0, sidebarSections.category.showAll ? categories.length : 5).map(category => (
                        <label key={category} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={filters.categories.has(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{category}</span>
                        </label>
                      ))}
                    </div>
                    {categories.length > 5 && (
                      <button 
                        onClick={() => toggleSeeAll('category')}
                        className="text-blue-600 text-sm mt-3 hover:text-blue-700 font-medium"
                      >
                        {sidebarSections.category.showAll ? 'See less' : 'See all'}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Brands Filter */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('brands')}
                >
                  <h3 className="font-medium text-gray-900">Brands</h3>
                  {sidebarSections.brands.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.brands.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      {brands.slice(0, sidebarSections.brands.showAll ? brands.length : 5).map(brand => (
                        <label key={brand} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={filters.brands.has(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{brand}</span>
                        </label>
                      ))}
                    </div>
                    {brands.length > 5 && (
                      <button 
                        onClick={() => toggleSeeAll('brands')}
                        className="text-blue-600 text-sm mt-3 hover:text-blue-700 font-medium"
                      >
                        {sidebarSections.brands.showAll ? 'See less' : 'See all'}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Features Filter */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('features')}
                >
                  <h3 className="font-medium text-gray-900">Features</h3>
                  {sidebarSections.features.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.features.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      {features.slice(0, sidebarSections.features.showAll ? features.length : 5).map(feature => (
                        <label key={feature} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={filters.features.has(feature)}
                            onChange={() => handleFeatureChange(feature)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{feature}</span>
                        </label>
                      ))}
                    </div>
                    {features.length > 5 && (
                      <button 
                        onClick={() => toggleSeeAll('features')}
                        className="text-blue-600 text-sm mt-3 hover:text-blue-700 font-medium"
                      >
                        {sidebarSections.features.showAll ? 'See less' : 'See all'}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Price Range */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('priceRange')}
                >
                  <h3 className="font-medium text-gray-900">Price range</h3>
                  {sidebarSections.priceRange.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.priceRange.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-2 mb-4">
                      {pricePresets.map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => handlePricePreset(preset.min, preset.max)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            filters.priceRange[0] === preset.min && filters.priceRange[1] === preset.max
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="block text-xs text-gray-500 mb-1">Min</label>
                          <input
                            type="number"
                            placeholder="0"
                            value={filters.priceRange[0]}
                            onChange={(e) => setFilters(prev => ({ 
                              ...prev, 
                              priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]] 
                            }))}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <span className="text-gray-400 mt-5">-</span>
                        <div className="flex-1">
                          <label className="block text-xs text-gray-500 mb-1">Max</label>
                          <input
                            type="number"
                            placeholder="2000"
                            value={filters.priceRange[1]}
                            onChange={(e) => setFilters(prev => ({ 
                              ...prev, 
                              priceRange: [prev.priceRange[0], parseInt(e.target.value) || 2000] 
                            }))}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition-colors font-medium">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Condition Filter */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('condition')}
                >
                  <h3 className="font-medium text-gray-900">Condition</h3>
                  {sidebarSections.condition.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.condition.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      {conditions.map(condition => (
                        <label key={condition.value} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="condition"
                            value={condition.value}
                            checked={filters.condition === condition.value}
                            onChange={(e) => setFilters(prev => ({ ...prev, condition: e.target.value }))}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{condition.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Ratings Filter */}
              <div>
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('ratings')}
                >
                  <h3 className="font-medium text-gray-900">Ratings</h3>
                  {sidebarSections.ratings.expanded ? (
                    <FaChevronUp className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  )}
                </div>
                {sidebarSections.ratings.expanded && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <label key={rating} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={filters.rating === rating}
                            onChange={() => setFilters(prev => ({ 
                              ...prev, 
                              rating: prev.rating === rating ? 0 : rating 
                            }))}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <div className="flex items-center ml-3">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < rating ? "text-yellow-400" : "text-gray-300"}
                                size={14}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">& up</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-4 lg:px-0">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              {/* Gift Categories Banner */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-4 mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">🎁 Perfect Gifts for Every Occasion</h3>
                    <p className="text-sm opacity-90">Curated gift collections with free gift wrapping</p>
                  </div>
                  <div className="flex gap-3 justify-center md:justify-end">
                    {giftCategories.slice(0, 3).map((category, index) => (
                      <div key={index} className="bg-white/20 rounded-lg px-3 py-2 text-center">
                        <div className="text-lg">{category.icon}</div>
                        <div className="text-xs">{category.name.split(' ')[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {filteredProducts.length} perfect gifts in <span className="font-medium text-pink-600">Gift Collection</span>
                  </span>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">Verified only</span>
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>

                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                    >
                      <BsGrid3X3Gap size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                    >
                      <BsList size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="mb-4">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 text-pink-700">
                  <span className="text-lg">🎀</span>
                  <span className="font-medium">Gift Services:</span>
                  <span className="text-sm">Free gift wrapping • Personalized messages • Express delivery</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  Samsung
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  Apple
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  Pocco
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  Metallic
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  4 star
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  3 star
                  <button className="text-blue-600 hover:text-blue-800">×</button>
                </span>
                <button className="text-blue-600 text-sm hover:text-blue-800">Clear all filter</button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
            }>
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                {[...Array(Math.min(5, totalPages))].map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 border rounded-md ${
                        currentPage === pageNum
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsPage;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaSearch, FaFilter } from "react-icons/fa";
import { MdGridView, MdViewList } from "react-icons/md";

const CategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mainCategories = [
    {
      id: "electronics",
      name: "Electronics & Gadgets",
      description: "Latest technology and electronic devices",
      image: "/electronics.jpg",
      itemCount: 2847,
      subcategories: ["Smartphones", "Laptops", "Cameras", "Audio", "Gaming"],
      color: "from-blue-500 to-blue-600",
      icon: "📱"
    },
    {
      id: "clothing",
      name: "Clothing & Fashion",
      description: "Trendy clothes and fashion accessories",
      image: "/cloth/1.jpg",
      itemCount: 5632,
      subcategories: ["Men's Wear", "Women's Wear", "Kids", "Shoes", "Accessories"],
      color: "from-pink-500 to-pink-600",
      icon: "👕"
    },
    {
      id: "home",
      name: "Home & Garden",
      description: "Everything for your home and outdoor spaces",
      image: "/interior/1.jpg",
      itemCount: 3421,
      subcategories: ["Furniture", "Decor", "Kitchen", "Garden", "Tools"],
      color: "from-green-500 to-green-600",
      icon: "🏠"
    },
    {
      id: "sports",
      name: "Sports & Outdoor",
      description: "Sports equipment and outdoor gear",
      image: "/tech/4.jpg",
      itemCount: 1876,
      subcategories: ["Fitness", "Outdoor", "Team Sports", "Water Sports", "Winter Sports"],
      color: "from-orange-500 to-orange-600",
      icon: "⚽"
    },
    {
      id: "automotive",
      name: "Automotive",
      description: "Car parts, accessories and tools",
      image: "/tech/6.jpg",
      itemCount: 2134,
      subcategories: ["Car Parts", "Accessories", "Tools", "Tires", "Electronics"],
      color: "from-gray-500 to-gray-600",
      icon: "🚗"
    },
    {
      id: "health",
      name: "Health & Beauty",
      description: "Health products and beauty essentials",
      image: "/cloth/5.jpg",
      itemCount: 4567,
      subcategories: ["Skincare", "Makeup", "Health", "Supplements", "Personal Care"],
      color: "from-purple-500 to-purple-600",
      icon: "💄"
    },
    {
      id: "books",
      name: "Books & Media",
      description: "Books, movies, music and educational content",
      image: "/tech/7.jpg",
      itemCount: 8901,
      subcategories: ["Books", "Movies", "Music", "Games", "Educational"],
      color: "from-indigo-500 to-indigo-600",
      icon: "📚"
    },
    {
      id: "toys",
      name: "Toys & Games",
      description: "Fun toys and games for all ages",
      image: "/cloth/6.jpg",
      itemCount: 3245,
      subcategories: ["Kids Toys", "Board Games", "Puzzles", "Educational", "Outdoor Toys"],
      color: "from-yellow-500 to-yellow-600",
      icon: "🧸"
    }
  ];

  const popularCategories = [
    { name: "Mobile Accessories", count: 1234, trend: "+12%" },
    { name: "Laptops", count: 567, trend: "+8%" },
    { name: "T-Shirts", count: 2341, trend: "+15%" },
    { name: "Kitchen Appliances", count: 876, trend: "+5%" },
    { name: "Fitness Equipment", count: 432, trend: "+22%" },
    { name: "Gaming", count: 789, trend: "+18%" }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? mainCategories 
    : mainCategories.filter(cat => cat.id === selectedCategory);

  const searchedCategories = filteredCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CategoryCard = ({ category, index }) => {
    if (viewMode === "list") {
      return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 animate-slideInLeft ${index % 2 === 0 ? 'animation-delay-100' : 'animation-delay-200'}`}>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {category.itemCount.toLocaleString()} items
                </span>
              </div>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.subcategories.slice(0, 3).map((sub, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {sub}
                  </span>
                ))}
                {category.subcategories.length > 3 && (
                  <span className="text-xs text-gray-500">+{category.subcategories.length - 3} more</span>
                )}
              </div>
            </div>
            <div className="flex items-center text-blue-600 hover:text-blue-700">
              <span className="mr-2">Browse</span>
              <FaChevronRight size={14} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-slideInUp animation-delay-${(index + 1) * 100}`}>
        <div className="relative">
          <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <span className="text-4xl relative z-10">{category.icon}</span>
            <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <span className="text-white text-xs font-medium">{category.itemCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={category.image}
              alt={category.name}
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
        </div>
        
        <div className="p-6 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {category.subcategories.slice(0, 3).map((sub, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors">
                  {sub}
                </span>
              ))}
            </div>
            
            <Link
              to={`/products?category=${category.id}`}
              className="flex items-center justify-between text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
            >
              <span>Browse Category</span>
              <FaChevronRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-gray-50 min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="px-0 md:px-16 lg:px-24 py-2 md:py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 md:mb-6 animate-fadeIn px-4 md:px-0">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">All Categories</span>
        </div>

        {/* Header Section */}
        <div className="bg-white md:rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 animate-slideInDown mx-4 md:mx-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h1>
              <p className="text-gray-600">Discover thousands of products across all categories</p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-1/2">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg border transition-colors ${
                    viewMode === "grid" 
                      ? "bg-blue-600 text-white border-blue-600" 
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <MdGridView size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg border transition-colors ${
                    viewMode === "list" 
                      ? "bg-blue-600 text-white border-blue-600" 
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <MdViewList size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories Quick Access */}
        <div className="bg-white md:rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 animate-slideInLeft animation-delay-200 mx-4 md:mx-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🔥 Trending Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((cat, index) => (
              <div key={index} className="text-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{cat.count.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-1">{cat.name}</div>
                <div className="text-xs text-green-600 font-medium">{cat.trend}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white md:rounded-lg p-4 md:p-6 mb-4 md:mb-6 animate-slideInRight animation-delay-300 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">🛍️ Shop with Confidence</h3>
              <p className="text-blue-100">Over 50,000+ products across all categories</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4 md:mt-0">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-blue-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-blue-200">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className="mb-6 mx-4 md:mx-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Browse Categories ({searchedCategories.length})
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Clear search
              </button>
            )}
          </div>

          {searchedCategories.length === 0 ? (
            <div className="bg-white md:rounded-lg shadow-sm p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchTerm("")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Categories
              </button>
            </div>
          ) : (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "space-y-4"
            }>
              {searchedCategories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-white md:rounded-lg shadow-sm p-6 md:p-8 text-center animate-slideInUp animation-delay-500 mx-4 md:mx-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-6">Contact our support team or browse our featured products</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/help"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Contact Support
            </Link>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
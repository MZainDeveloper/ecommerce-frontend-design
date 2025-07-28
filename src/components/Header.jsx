import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import AuthModal from "./Auth/AuthModal";
import UserMenu from "./Auth/UserMenu";

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { cartCount } = useCart();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchOnTablet, setShowSearchOnTablet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showShipToDropdown, setShowShipToDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English, USD");
  const [selectedShipTo, setSelectedShipTo] = useState("🇩🇪");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);

  // Sample search suggestions
  const suggestions = [
    "iPhone 15 Pro",
    "Samsung Galaxy S24",
    "MacBook Pro",
    "AirPods Pro",
    "iPad Air",
    "Apple Watch",
    "Gaming Laptop",
    "Wireless Headphones",
    "Smart TV",
    "Camera DSLR",
  ];

  const searchCategories = [
    { value: "all", label: "All category" },
    { value: "electronics", label: "Electronics" },
    { value: "mobile", label: "Mobile accessory" },
    { value: "clothing", label: "Clothing" },
    { value: "home", label: "Home & Garden" },
    { value: "sports", label: "Sports" },
    { value: "books", label: "Books" },
    { value: "tech", label: "Modern tech" },
    { value: "appliances", label: "Home Appliances" }
  ];

  const languages = [
    { code: "en", name: "English, USD", currency: "USD" },
    { code: "es", name: "Español, EUR", currency: "EUR" },
    { code: "fr", name: "Français, EUR", currency: "EUR" },
    { code: "de", name: "Deutsch, EUR", currency: "EUR" },
    { code: "zh", name: "中文, CNY", currency: "CNY" },
    { code: "ja", name: "日本語, JPY", currency: "JPY" },
  ];

  const shipToCountries = [
    { code: "US", flag: "🇺🇸", name: "United States" },
    { code: "UK", flag: "🇬🇧", name: "United Kingdom" },
    { code: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "FR", flag: "🇫🇷", name: "France" },
    { code: "JP", flag: "🇯🇵", name: "Japan" },
    { code: "CN", flag: "🇨🇳", name: "China" },
    { code: "PK", flag: "🇵🇰", name: "Pakistan" },
  ];

  // Sample messages
  const sampleMessages = [
    {
      id: 1,
      sender: "Support Team",
      message: "Welcome to our store! How can we help you today?",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Order Updates",
      message: "Your order #12345 has been shipped!",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      sender: "Promotions",
      message: "Flash sale: 50% off electronics!",
      time: "3 hours ago",
      unread: false,
    },
  ];

  // Sample orders
  const sampleOrders = [
    {
      id: "12345",
      item: "iPhone 15 Pro",
      status: "Shipped",
      date: "2024-01-15",
      total: "$999.99",
    },
    {
      id: "12344",
      item: "MacBook Pro",
      status: "Delivered",
      date: "2024-01-10",
      total: "$1299.99",
    },
    {
      id: "12343",
      item: "AirPods Pro",
      status: "Processing",
      date: "2024-01-14",
      total: "$249.99",
    },
  ];

  // Initialize data
  useEffect(() => {
    setMessages(sampleMessages);
    setOrders(sampleOrders);
  }, []);

  // Effect to toggle body scrolling when sidebar opens/closes
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);

  // Search functionality with suggestions
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const params = new URLSearchParams();
      params.set('search', searchQuery.trim());
      if (selectedCategory !== "all") {
        params.set('category', selectedCategory);
      }
      navigate(`/products?${params.toString()}`);
      setShowSuggestions(false);
      setIsSearchFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setIsSearchFocused(false);
    const params = new URLSearchParams();
    params.set('search', suggestion);
    if (selectedCategory !== "all") {
      params.set('category', selectedCategory);
    }
    navigate(`/products?${params.toString()}`);
  };

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  const handleUserMenuToggle = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleUserMenuClose = () => {
    setShowUserMenu(false);
  };

  const handleMessageClick = () => {
    if (!user) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    navigate('/messages');
    // Mark messages as read
    setMessages((prev) => prev.map((msg) => ({ ...msg, unread: false })));
  };

  const handleOrdersClick = () => {
    if (!user) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    navigate('/orders');
  };

  const unreadMessageCount = messages.filter((msg) => msg.unread).length;

  return (
    <>
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        {/* Main Header */}
        <div className="hidden sm:block">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 mr-4 lg:mr-8">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">Brand</span>
              </Link>

              {/* Search Bar */}
              <div className={`flex-1 max-w-sm md:max-w-md lg:max-w-2xl mx-2 md:mx-4 lg:mx-8 relative transition-all duration-300 ${
                showSearchOnTablet ? 'md:block' : 'hidden md:block lg:block'
              }`}>
                <form
                  onSubmit={handleSearch}
                  className="flex items-stretch border border-blue-500 rounded-lg overflow-hidden bg-white"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() =>
                      setTimeout(() => setIsSearchFocused(false), 200)
                    }
                    className="flex-1 px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 outline-none text-gray-700 bg-white text-sm"
                  />
                  <div className="hidden xl:flex items-center px-4 border-l border-gray-300 bg-gray-50">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-transparent outline-none text-gray-700 border-none cursor-pointer text-sm min-w-0"
                    >
                      {searchCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 md:px-4 lg:px-8 py-2 md:py-2.5 lg:py-3 hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    <span className="hidden lg:inline">Search</span>
                    <CiSearch className="lg:hidden" size={16} />
                  </button>
                </form>

                {/* Search Suggestions Dropdown */}
                {showSuggestions &&
                  isSearchFocused &&
                  searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                        >
                          <CiSearch size={16} className="text-gray-400" />
                          <span className="text-gray-700">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              {/* Search Toggle for Tablet */}
              <button
                onClick={() => setShowSearchOnTablet(!showSearchOnTablet)}
                className="md:block lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Toggle search"
              >
                <CiSearch size={20} />
              </button>

              {/* Right Icons */}
              <div className="flex items-center gap-1 md:gap-2 lg:gap-6">
                {/* Profile */}
                <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer relative min-w-0">
                  {loading ? (
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 animate-pulse"></div>
                  ) : user ? (
                    <div className="relative">
                      <button
                        onClick={handleUserMenuToggle}
                        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <img
                          src={user.avatar}
                          alt="Profile"
                          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-200"
                        />
                        <div className="hidden lg:block text-left">
                          <div className="text-sm font-medium text-gray-900">
                            {user.displayName}
                          </div>
                          <div className="text-xs text-gray-500">Premium</div>
                        </div>
                        <MdKeyboardArrowDown className="hidden lg:block text-gray-400" size={16} />
                      </button>

                      {/* User Menu Dropdown */}
                      {showUserMenu && (
                        <div className="absolute top-full right-0 mt-2 z-50">
                          <UserMenu onClose={handleUserMenuClose} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <button onClick={() => handleAuthClick('login')}>
                      <FaUser size={16} className="md:w-5 md:h-5" />
                      <span className="text-xs mt-1 hidden md:block">Profile</span>
                    </button>
                  )}
                </div>

                {/* Message */}
                <button
                  onClick={handleMessageClick}
                  className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer relative min-w-0"
                >
                  <div className="relative">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {unreadMessageCount > 0 && (
                      <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center animate-pulse">
                        {unreadMessageCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden md:block">Message</span>
                </button>

                {/* Orders */}
                <button
                  onClick={handleOrdersClick}
                  className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer min-w-0"
                >
                  <FaHeart size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs mt-1 hidden md:block">Orders</span>
                </button>

                {/* Cart */}
                <Link
                  to="/checkout"
                  className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors relative min-w-0"
                >
                  <div className="relative">
                    <IoMdCart size={16} className="md:w-5 md:h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center animate-bounce">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden md:block">My cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="hidden sm:block bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left Navigation */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 overflow-x-auto scrollbar-hide">
                <Link
                  to="/category"
                  className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap min-w-fit"
                >
                 
                  <span className="font-medium text-sm md:text-base">
                    All category
                  </span>
                </Link>
                <Link
                  to="/offers"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap text-sm md:text-base min-w-fit"
                >
                  Hot offers
                </Link>
                <Link
                  to="/gifts"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap text-sm md:text-base min-w-fit"
                >
                  Gift boxes
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap text-sm md:text-base min-w-fit"
                >
                  Projects
                </Link>
                <Link
                  to="/menu"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap text-sm md:text-base min-w-fit"
                >
                  Menu item
                </Link>
                <div className="relative">
                  <Link
                    to="/help"
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap text-sm md:text-base min-w-fit"
                  >
                    Help
                   
                  </Link>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowLanguageDropdown(!showLanguageDropdown)
                    }
                    className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                  >
                    <span className="font-medium text-xs sm:text-sm md:text-base hidden lg:inline">{selectedLanguage}</span>
                    <span className="font-medium text-xs sm:text-sm md:text-base lg:hidden">EN</span>
                    <MdKeyboardArrowDown size={14} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </button>
                  {showLanguageDropdown && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px] sm:min-w-[180px]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.name);
                            setShowLanguageDropdown(false);
                          }}
                          className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-50 text-xs sm:text-sm"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ship To Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowShipToDropdown(!showShipToDropdown)}
                    className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                  >
                    <span className="font-medium text-xs sm:text-sm md:text-base hidden lg:inline">Ship to</span>
                    <span className="text-base sm:text-lg">{selectedShipTo}</span>
                    <MdKeyboardArrowDown size={14} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </button>
                  {showShipToDropdown && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px] sm:min-w-[160px]">
                      {shipToCountries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedShipTo(country.flag);
                            setShowShipToDropdown(false);
                          }}
                          className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-50 text-xs sm:text-sm flex items-center gap-2"
                        >
                          <span className="text-sm sm:text-base">{country.flag}</span>
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="w-full px-4 py-3 flex flex-col sm:hidden">
          <div className="flex justify-between items-center">
            <div className="left flex items-center gap-4">
              <button
                onClick={() => setShowSidebar(true)}
                aria-label="Open menu"
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <RxHamburgerMenu size={24} className="text-gray-700" />
              </button>
              <Link
                to="/"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600">Brand</span>
                </div>
              </Link>
            </div>
            <div className="right flex items-center gap-4">
              <Link
                to="/checkout"
                className="relative transform hover:scale-110 transition-transform duration-200"
              >
                <IoMdCart size={24} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              </Link>
              <button
                onClick={
                  user ? handleUserMenuToggle : () => handleAuthClick('login')
                }
                className="transform hover:scale-110 transition-transform duration-200"
              >
                {user ? (
                  <img
                    src={user?.avatar}
                    alt={user?.displayName}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <FaUser size={20} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Search */}
          <div className="relative mt-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:bg-white focus-within:border-blue-500 transition-all duration-200"
            >
              <CiSearch size={20} className="text-gray-400 flex-shrink-0" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent outline-none text-gray-700 border-none text-xs mr-2 flex-shrink-0"
              >
                {searchCategories.slice(0, 5).map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <input
                className="w-full focus:outline-none bg-transparent text-sm placeholder-gray-500"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoMdClose size={16} />
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                Go
              </button>
            </form>

            {/* Mobile Search Suggestions */}
            {showSuggestions &&
              isSearchFocused &&
              searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-48 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                    >
                      <CiSearch size={16} className="text-gray-400" />
                      <span className="text-gray-700 text-sm">
                        {suggestion}
                      </span>
                    </button>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
        showSidebar ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">B</span>
              </div>
              <div>
                <div className="font-bold text-lg">Brand</div>
                <div className="text-blue-100 text-sm">Your Shopping Hub</div>
              </div>
            </div>
            <button
              onClick={() => setShowSidebar(false)}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          {/* User Section */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user?.avatar}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-full border-2 border-blue-200"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{user?.displayName}</div>
                  <div className="text-sm text-gray-600">{user?.email}</div>
                </div>
                <button
                  onClick={() => {
                    setShowSidebar(false);
                    // Add logout functionality here if needed
                  }}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaUser size={20} className="text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Welcome!</div>
                  <div className="text-sm text-gray-600">Sign in to your account</div>
                </div>
                <button
                  onClick={() => {
                    setShowSidebar(false);
                    handleAuthClick('login');
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="space-y-1">
                {/* Main Navigation Items */}
                <Link
                  to="/category"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
                >
                  <RxHamburgerMenu size={20} className="group-hover:text-blue-600" />
                  <span className="font-medium">All Categories</span>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="/offers"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors group"
                >
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="font-medium">Hot Offers</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">HOT</span>
                </Link>

                <Link
                  to="/gifts"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <span className="font-medium">Gift Boxes</span>
                </Link>

                <Link
                  to="/projects"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="font-medium">Projects</span>
                </Link>

                <Link
                  to="/menu"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="font-medium">Menu Item</span>
                </Link>

                <Link
                  to="/help"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Help & Support</span>
                </Link>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>

              {/* Quick Actions */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Quick Actions
                </div>

                <button
                  onClick={() => {
                    setShowSidebar(false);
                    handleMessageClick();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
                >
                  <div className="relative">
                    <svg className="w-5 h-5 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {unreadMessageCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {unreadMessageCount}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">Messages</span>
                  {unreadMessageCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {unreadMessageCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setShowSidebar(false);
                    handleOrdersClick();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors group"
                >
                  <FaHeart size={18} className="group-hover:text-green-600" />
                  <span className="font-medium">My Orders</span>
                </button>

                <Link
                  to="/checkout"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors group"
                >
                  <div className="relative">
                    <IoMdCart size={20} className="group-hover:text-purple-600" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">My Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-auto bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      {cartCount} items
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="space-y-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="font-medium text-gray-700">{selectedLanguage}</span>
                  </div>
                  <MdKeyboardArrowDown className={`w-5 h-5 text-gray-400 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showLanguageDropdown && (
                  <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.name);
                          setShowLanguageDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-b-0"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Ship To Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowShipToDropdown(!showShipToDropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium text-gray-700">Ship to {selectedShipTo}</span>
                  </div>
                  <MdKeyboardArrowDown className={`w-5 h-5 text-gray-400 transition-transform ${showShipToDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showShipToDropdown && (
                  <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {shipToCountries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedShipTo(country.flag);
                          setShowShipToDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSuccess={handleAuthSuccess}
        />
      )}

      {/* Overlay to close user menu when clicking outside */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={handleUserMenuClose}
        ></div>
      )}
    </>
  );
};

export default Header;
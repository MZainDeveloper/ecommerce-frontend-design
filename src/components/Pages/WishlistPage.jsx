import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaTrash, FaShare, FaStar, FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

const WishlistPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedItems, setSelectedItems] = useState(new Set());

  const wishlistItems = [
    {
      id: 1,
      name: 'Smart Watch Pro',
      price: 249.99,
      originalPrice: 299.99,
      image: '/8.jpg',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      discount: 17,
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: '/tech/1.jpg',
      rating: 4.3,
      reviews: 89,
      inStock: true,
      discount: 31,
      addedDate: '2024-01-08'
    },
    {
      id: 3,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: '/cloth/1.jpg',
      rating: 4.7,
      reviews: 234,
      inStock: false,
      discount: 25,
      addedDate: '2024-01-05'
    },
    {
      id: 4,
      name: 'Professional DSLR Camera',
      price: 799.99,
      originalPrice: 999.99,
      image: '/6.jpg',
      rating: 4.8,
      reviews: 67,
      inStock: true,
      discount: 20,
      addedDate: '2024-01-03'
    },
    {
      id: 5,
      name: 'Electric Coffee Maker',
      price: 159.99,
      originalPrice: 199.99,
      image: '/tech/7.jpg',
      rating: 4.2,
      reviews: 156,
      inStock: true,
      discount: 20,
      addedDate: '2023-12-28'
    }
  ];

  const toggleItemSelection = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const removeFromWishlist = (itemId) => {
    // Handle remove from wishlist
    console.log('Remove item:', itemId);
  };

  const addToCart = (itemId) => {
    // Handle add to cart
    console.log('Add to cart:', itemId);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
        size={12}
      />
    ));
  };

  const GridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {wishlistItems.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {item.discount && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  -{item.discount}%
                </span>
              )}
              {!item.inStock && (
                <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
              >
                <FaTrash className="text-red-500" size={14} />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors">
                <FaShare className="text-blue-500" size={14} />
              </button>
            </div>

            {/* Checkbox */}
            <div className="absolute bottom-3 left-3">
              <input
                type="checkbox"
                checked={selectedItems.has(item.id)}
                onChange={() => toggleItemSelection(item.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="p-6">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {renderStars(item.rating)}
              </div>
              <span className="text-sm text-gray-500">({item.reviews})</span>
            </div>

            {/* Product Name */}
            <Link to="/description" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2 mb-3">
              {item.name}
            </Link>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-gray-900">${item.price}</span>
              {item.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(item.id)}
              disabled={!item.inStock}
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                item.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {item.inStock ? (
                <div className="flex items-center justify-center gap-2">
                  <FaShoppingCart size={14} />
                  Add to Cart
                </div>
              ) : (
                'Out of Stock'
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {wishlistItems.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-6">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selectedItems.has(item.id)}
              onChange={() => toggleItemSelection(item.id)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />

            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain bg-gray-50 rounded-xl"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <Link to="/description" className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-1 mb-2">
                {item.name}
              </Link>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {renderStars(item.rating)}
                </div>
                <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                  {item.discount && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                      -{item.discount}%
                    </span>
                  )}
                </div>
                
                {!item.inStock && (
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => addToCart(item.id)}
                disabled={!item.inStock}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  item.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {item.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              >
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-4 md:py-8">
      <div className="px-0 md:px-16 lg:px-24">
        {/* Header */}
        <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-8 mb-6 md:mb-8 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <FaHeart className="text-red-500" />
                My Wishlist
              </h1>
              <p className="text-gray-600">Save your favorite items for later</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-red-50 px-4 py-2 rounded-xl">
                <span className="text-red-600 font-semibold text-lg">{wishlistItems.length}</span>
                <span className="text-red-600 text-sm ml-1">Items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-8 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Bulk Actions */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedItems.size === wishlistItems.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItems(new Set(wishlistItems.map(item => item.id)));
                    } else {
                      setSelectedItems(new Set());
                    }
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium">Select All</span>
              </label>
              
              {selectedItems.size > 0 && (
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Selected to Cart ({selectedItems.size})
                  </button>
                  <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                    Remove Selected
                  </button>
                </div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <BsGrid3X3Gap size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <FaList size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="mx-4 md:mx-0">
          {wishlistItems.length > 0 ? (
            viewMode === 'grid' ? <GridView /> : <ListView />
          ) : (
            <div className="bg-white md:rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-6">Start adding items you love to your wishlist</p>
              <Link
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium inline-block"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
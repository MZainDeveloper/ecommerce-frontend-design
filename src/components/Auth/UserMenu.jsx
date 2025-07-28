import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaShoppingBag, FaHeart, FaCog, FaSignOutAlt, FaStar, FaShieldAlt } from 'react-icons/fa';

const UserMenu = ({ onClose }) => {
  const { user, logout } = useAuth();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = async () => {
    await logout();
    if (onClose) onClose();
  };

  const handleMenuClick = () => {
    if (onClose) onClose();
  };

  return (
    <div ref={menuRef} className="bg-white border border-gray-100 rounded-2xl shadow-2xl min-w-[320px] overflow-hidden backdrop-blur-sm">
      {/* Premium Header with Gradient */}
      <div className="relative px-6 py-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
        </div>
        
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden">
              <img 
                src={user?.avatar} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {user?.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <FaShieldAlt className="text-white text-xs" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate">
              {user?.displayName}
            </h3>
            <p className="text-sm text-white/80 truncate">
              {user?.email}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <FaStar className="text-yellow-300 text-xs" />
                <span className="text-xs font-medium text-white">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Stats */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <FaShoppingBag className="text-blue-600 text-lg" />
            </div>
            <div className="text-xl font-bold text-gray-900">47</div>
            <div className="text-xs text-gray-500 font-medium">Orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <FaHeart className="text-red-500 text-lg" />
            </div>
            <div className="text-xl font-bold text-gray-900">23</div>
            <div className="text-xs text-gray-500 font-medium">Wishlist</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <FaStar className="text-yellow-500 text-lg" />
            </div>
            <div className="text-xl font-bold text-gray-900">4.9</div>
            <div className="text-xs text-gray-500 font-medium">Rating</div>
          </div>
        </div>
      </div>

      {/* Premium Menu Items */}
      <div className="py-2">
        <Link
          to="/profile"
          onClick={handleMenuClick}
          className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
            <FaUser className="text-gray-600 group-hover:text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">My Profile</div>
            <div className="text-xs text-gray-500">Manage your account</div>
          </div>
        </Link>

        <Link
          to="/orders"
          onClick={handleMenuClick}
          className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
            <FaShoppingBag className="text-gray-600 group-hover:text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">My Orders</div>
            <div className="text-xs text-gray-500">Track your purchases</div>
          </div>
          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
            47
          </div>
        </Link>

        <Link
          to="/wishlist"
          onClick={handleMenuClick}
          className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
            <FaHeart className="text-gray-600 group-hover:text-red-500" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Wishlist</div>
            <div className="text-xs text-gray-500">Your saved items</div>
          </div>
          <div className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
            23
          </div>
        </Link>

        <Link
          to="/settings"
          onClick={handleMenuClick}
          className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
            <FaCog className="text-gray-600 group-hover:text-gray-700" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Settings</div>
            <div className="text-xs text-gray-500">Preferences & privacy</div>
          </div>
        </Link>
        
        <div className="mx-6 my-3 border-t border-gray-200"></div>
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-6 py-4 text-red-600 hover:bg-red-50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
            <FaSignOutAlt className="text-red-500" />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold">Sign Out</div>
            <div className="text-xs text-red-400">See you soon!</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
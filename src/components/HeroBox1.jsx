import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./Auth/AuthModal";

const HeroBox1 = () => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleJoinNow = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleLogIn = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // Reset form fields if needed
  };

  if (loading) {
    return (
      <div className="flex flex-col px-3 py-6 bg-box-1 rounded-md">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-button"></div>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="relative flex flex-col px-4 py-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt="Profile" 
              className="w-10 h-10 rounded-xl border-2 border-white shadow-sm"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3 flex-1 min-w-0">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="text-gray-900 font-semibold text-sm truncate hover:text-blue-600 transition-colors"
            >
              {user.displayName}
            </button>
            <p className="text-blue-600 text-xs font-medium">
              Premium Member
            </p>
          </div>
        </div>

        

        <div>
          <Link 
            to="/orders"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <FaShoppingBag size={14} />
            View Orders
          </Link>
        </div>

        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="py-2">
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowUserMenu(false)}
              >
                My Profile
              </Link>
              <Link 
                to="/orders" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowUserMenu(false)}
              >
                My Orders
              </Link>
              <Link 
                to="/wishlist" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowUserMenu(false)}
              >
                Wishlist
              </Link>
              <Link 
                to="/settings" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowUserMenu(false)}
              >
                Settings
              </Link>
              <hr className="my-1" />
              <button 
                onClick={() => {
                  setShowUserMenu(false);
                  // Add logout functionality here if needed
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col px-3 py-6 bg-box-1 rounded-md">
        <div className="flex items-center">
          <HiOutlineShoppingBag size={32} className="text-gray" />
          <div className="ml-2 font-light">
            <p className="text-black">Hi, user</p>
            <p className="text-black">let's get started</p>
          </div>
        </div>

        <button 
          onClick={handleJoinNow}
          className="bg-button text-white px-4 py-1.5 rounded-md mt-2 hover:bg-button-2 transition-colors duration-200"
        >
          Join now
        </button>
        <button 
          onClick={handleLogIn}
          className="bg-white text-button px-4 py-1.5 rounded-md mt-2 border border-button hover:bg-blue-50 transition-colors duration-200"
        >
          Log in
        </button>
      </div>

      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
};

export default HeroBox1;
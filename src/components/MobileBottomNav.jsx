import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaGift, FaProjectDiagram } from "react-icons/fa";
import { MdLocalOffer, MdHelp, MdCategory } from "react-icons/md";

const MobileBottomNav = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const menu_names = [
    {
      name: "All category",
      path: "/products",
      icon: <MdCategory size={20} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Hot offers",
      path: "/offers",
      icon: <MdLocalOffer size={20} />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      badge: true
    },
    {
      name: "Gift boxes",
      path: "/gifts",
      icon: <FaGift size={20} />,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaProjectDiagram size={20} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Help",
      path: "/help",
      icon: <MdHelp size={20} />,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
  ];

  return (
    <div className="md:hidden">
      {/* Top Mobile Navigation */}
      <div className="flex overflow-x-auto px-4 py-3 bg-white border-b border-gray-100 scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {menu_names.map((menu, index) => {
            const isActive = location.pathname === menu.path;
            return (
              <Link
                key={index}
                to={menu.path}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? `${menu.color} ${menu.bgColor} shadow-md` 
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="relative">
                  {menu.icon}
                  {menu.badge && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <span className="text-sm">{menu.name}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="grid grid-cols-2 gap-3">
          <Link 
            to="/offers/flash"
            className="bg-white rounded-lg p-3 shadow-sm border border-red-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <MdLocalOffer className="text-red-600" size={16} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Flash Sale</div>
                <div className="text-xs text-red-600">Up to 70% off</div>
              </div>
            </div>
          </Link>

          <Link 
            to="/gifts/custom"
            className="bg-white rounded-lg p-3 shadow-sm border border-green-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FaGift className="text-green-600" size={16} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Gift Boxes</div>
                <div className="text-xs text-green-600">Custom wrapping</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
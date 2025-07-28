import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHome, FaGift, FaProjectDiagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLocalOffer, MdHelp, MdCategory } from "react-icons/md";

const BottomNavbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu_names = [
    {
      name: "All category",
      path: "/category",
      icon: <MdCategory size={18} />,
    },
    {
      name: "Hot offers",
      path: "/offers",
      icon: <MdLocalOffer size={18} />,
      badge: "HOT",
    },
    {
      name: "Gift boxes",
      path: "/gifts",
      icon: <FaGift size={18} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaProjectDiagram size={18} />,
    },
    {
      name: "Menu item",
      path: "/menu",
      icon: <GiHamburgerMenu size={18} />,
    },
    {
      name: "Help",
      path: "/help",
      icon: <MdHelp size={18} />,
    },
  ];

  return (
    <>

      {/* Enhanced Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
        <div className="flex justify-around items-center py-2">
          {menu_names.slice(0, 5).map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                location.pathname === menu.path 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className="relative">
                {menu.icon}
                {menu.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full animate-pulse">
                    •
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{menu.name.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomNavbar; 
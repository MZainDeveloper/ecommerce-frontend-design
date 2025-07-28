import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="bg-gray-100 border-t border-gray-200">
      <div className="px-4 md:px-16 lg:px-24 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <div className="flex items-center gap-2 order-2 lg:order-1">
          <FaRegCopyright className="text-gray-500" size={14} />
          <p className="text-gray-500 font-light text-sm">
            2023 Ecommerce.
          </p>
        </div>
        <div className="flex items-center gap-2 order-1 lg:order-2">
          <img
            src="/flags/usa.png"
            alt="USA Flag"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-sm"
          />
          <p className="text-gray-500 font-light text-sm">English</p>
          <MdKeyboardArrowUp size={20} className="text-black font-bold" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
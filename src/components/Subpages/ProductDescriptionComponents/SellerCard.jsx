import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const SellerCard = ({ isMobile, right }) => {
  if (isMobile) {
    return (
      <>
        {/* Seller Info */}
        <div className="mt-4 flex items-center justify-between border-t border-b border-gray-200 py-3">
          <div className="flex items-center">
            <div className="rounded-full bg-teal-100 text-teal-600 w-8 h-8 flex items-center justify-center font-bold mr-2">
              R
            </div>
            <div>
              <p className="text-sm font-medium">Supplier</p>
              <p className="text-xs text-gray-500">Guanxi Trading LLC</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Shipping and Country */}
        <div className="flex justify-between mt-3">
          <div className="flex items-center">
            <img
              src="/flags/germany.png"
              alt="Germany"
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm">Germany</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-1">✓</span>
            <span className="text-sm">Verified</span>
          </div>
          <div className="flex items-center">
            <MdLocalShipping className="text-gray-500 mr-1" />
            <span className="text-sm">Shipping</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md text-center">
          Send inquiry
        </button>

        {/* Save / Favorite Button */}
        <div className="mt-3 flex justify-center items-center">
          <FaRegHeart className="text-blue-600 mr-1" />
          <span className="text-blue-600 text-sm">Save</span>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col ml-4 mr-6 mt-4">
      {/* Card with seller info */}
      <div className="w-[240px] border border-icons/50 rounded-md p-4">
        {/* Supplier */}
        <div className="flex items-center pb-3 mb-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-[#DEFFEE] w-10 h-10 flex items-center justify-center rounded-md text-xl font-semibold text-[#4CA981]">
              R
            </div>
            <div>
              <p className="text-sm text-gray-500">Supplier</p>
              <p className="font-medium">Shawaiz Ishtiaq</p>
            </div>
          </div>
        </div>

        {/* Location and verification */}
        <div className="flex flex-col gap-3 mb-4">
          {right.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span className="text-gray-500">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button className="w-full bg-blue text-white py-2 rounded-md mt-2 font-medium">
          Send inquiry
        </button>
        <button className="w-full bg-white text-blue py-2 rounded-md mt-2 border border-gray-200 font-medium">
          Seller's profile
        </button>
      </div>

      {/* Save for later - placed under the seller card */}
      <div className="flex items-center justify-center gap-2 mt-4 text-blue cursor-pointer">
        <FaRegHeart />
        <span>Save for later</span>
      </div>
    </div>
  );
};

export default SellerCard;

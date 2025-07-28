import React from "react";

const DiscountBanner = () => {
  return (
    <div className="mt-8">
      <div className="bg-blue-1 text-white rounded-md flex items-center justify-between">
        <div className="flex flex-col px-8 py-6">
          <p className="font-semibold">
            <span className="text-blue-2">Super discount</span>
            <span className="text-white"> on more than </span>
            <span className="text-blue-2">100 USD</span>
          </p>
          <p className="text-white/50">Applicable on all items.</p>
        </div>
        <div className="text-white bg-orange-300 rounded-md mr-3 px-4 py-2">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;

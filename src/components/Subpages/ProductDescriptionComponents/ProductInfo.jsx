import React from "react";
import { IoMdCheckmark, IoMdStar, IoMdStarOutline } from "react-icons/io";
import { MdOutlineMessage, MdOutlineShoppingBasket } from "react-icons/md";

const ProductInfo = ({ isMobile, description, pcs }) => {
  if (isMobile) {
    return (
      <div>
        {/* Reviews and Rating */}
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <IoMdStar
              key={i}
              className={i < 4 ? "text-yellow-400" : "text-gray-300"}
              size={16}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">32 reviews</span>
        </div>

        {/* Product Name */}
        <h1 className="text-lg font-medium mt-2">Product name goes here</h1>
        <p className="text-xl font-bold text-blue-600 mt-1">$129.95</p>

        {/* Description Details */}
        <div className="mt-3">
          <div className="grid grid-cols-2 gap-y-2 text-sm border-t border-b border-gray-200 py-3">
            <div className="text-gray-500">Condition</div>
            <div>Brand new</div>

            <div className="text-gray-500">Material</div>
            <div>Plastic</div>

            <div className="text-gray-500">Category</div>
            <div>Electronics, gadgets</div>

            <div className="text-gray-500">Item num.</div>
            <div>23421</div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-3">
          <p className="text-sm text-gray-600">
            Info about edu doll. An ideal companion for preschoolers engaged in
            learning. The drone provides precise and...
          </p>
          <button className="text-blue-600 text-sm mt-1">Read more</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-4 px-4 w-[50%]">
      {/* Arrow and in Stock */}
      <div className="flex items-center text-green-600 gap-2">
        <IoMdCheckmark size={24} />
        <p className="font-medium">In stock</p>
      </div>

      <h1 className="font-semibold text-xl mt-2">
        Mens Long Sleeve T-shirt Cotton Base <br />
        Layer Slim Muscle
      </h1>

      {/* Rating - reviews - sold */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center text-rating ">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStarOutline />
          <p className="ml-1">9.3</p>
        </div>
        <div className="w-2 h-2 bg-dot rounded-full"></div>
        <div className="flex items-center gap-2 text-reviews">
          <MdOutlineMessage size={20} />
          <p className="font-medium">32 reviews</p>
        </div>
        <div className="w-2 h-2 bg-dot rounded-full"></div>
        <div className="flex items-center gap-2 text-reviews">
          <MdOutlineShoppingBasket size={20} />
          <p className="font-medium">154 sold</p>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="my-3">
        <div className="flex bg-box rounded-md overflow-hidden">
          {pcs.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center px-6 py-3 
                ${
                  index === 0
                    ? ""
                    : index === 1
                    ? "border-l border-r border-icons/50"
                    : ""
                }
              `}
            >
              <p
                className={`font-bold text-lg ${
                  index === 0 ? "text-red-600" : ""
                }`}
              >
                {item.price}
              </p>
              <p className="text-pcs text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        {description.map((desc, index) => (
          <div
            key={index}
            className={`flex items-center py-3 ${
              index === 0 || index === 3 || index === description.length - 1
                ? "border-b border-icons/50"
                : ""
            }`}
          >
            <p className="text-desc w-32">{desc.heading}</p>
            <p className="text-hero-text">{desc.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;

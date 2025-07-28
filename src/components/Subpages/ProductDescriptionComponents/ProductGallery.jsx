import React from "react";

const ProductGallery = ({
  selectedImage,
  setSelectedImage,
  images,
  isMobile,
}) => {
  return isMobile ? (
    // Mobile gallery layout
    <div className="mb-4">
      <img
        src={selectedImage}
        alt="Product"
        className="w-full h-60 object-contain bg-gray-100 rounded-md"
      />
      <div className="flex overflow-x-auto mt-2 gap-2 pb-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className="flex-shrink-0 focus:outline-none"
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-12 h-12 object-cover border rounded-md ${
                selectedImage === img
                  ? "border-blue-500 border-2"
                  : "border-gray-200"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  ) : (
    // Desktop gallery layout
    <div className="left px-6 py-4 w-[30%]">
      <div className="relative">
        <img
          src={selectedImage}
          alt="Collared Gray T-Shirt"
          className="w-full border-1 border-icons/50 rounded-md h-80 object-contain bg-white"
        />
        {/* Thumbnail images */}
        <div className="flex overflow-x-auto scrollbar-hide mt-3 w-full">
          <div className="flex gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className="focus:outline-none"
              >
                <img
                  src={img}
                  alt={`T-shirt view ${index + 1}`}
                  className={`w-14 h-14 object-cover border ${
                    selectedImage === img
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  } rounded-md cursor-pointer hover:border-blue transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

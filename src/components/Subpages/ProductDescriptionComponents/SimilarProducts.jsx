import React from "react";

const SimilarProducts = ({ products, isMobile }) => {
  if (isMobile) {
    return (
      <div className="mt-6">
        <h2 className="font-medium mb-3">Similar products</h2>
        <div className="grid grid-cols-3 gap-2">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-md p-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-20 object-contain"
              />
              <p className="text-xs mt-1 text-gray-500">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/4 px-4 pt-0">
      <h2 className="text-xl font-semibold mb-4">You may like</h2>
      <div className="flex flex-col gap-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-md p-3 flex flex-col"
          >
            <div className="mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-20 object-contain"
              />
            </div>
            <h3 className="text-xs font-medium">{product.name}</h3>
            <p className="text-gray-500 text-xs mt-1">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;

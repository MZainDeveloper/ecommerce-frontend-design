import React from "react";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-5">
      <div className="px-6">
        <h2 className="text-xl font-semibold mb-4">Related products</h2>
        <div className="grid grid-cols-6 gap-4">
          {products.slice(4, 10).map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-md p-3 flex flex-col"
            >
              <div className="mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-contain"
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
    </div>
  );
};

export default RelatedProducts;

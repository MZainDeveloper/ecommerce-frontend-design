import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductDescription = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Sample product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id) || 1,
    name: "Sample Product",
    price: 99.99,
    image: "/tech/1.jpg",
    category: "Electronics",
    brand: "TechBrand",
    description: "This is a detailed description of the product. It includes all the features and specifications that customers need to know.",
    features: [
      "High quality materials",
      "Durable construction",
      "Modern design",
      "Easy to use"
    ],
    discount: 0
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-contain bg-gray-100 rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              {product.discount > 0 && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
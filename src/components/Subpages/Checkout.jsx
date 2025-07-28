import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useOrders } from "../../context/OrderContext";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import {
  BsShieldCheck,
  BsQuestionCircle,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import AuthModal from "../Auth/AuthModal";
import OrderSuccessModal from "./OrderSuccessModal";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items: cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { createOrder } = useOrders();
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [authMode, setAuthMode] = React.useState('login');
  
  // Check if screen is mobile size
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [isProcessing, setIsProcessing] = React.useState(false);

  // Check authentication on component mount
  React.useEffect(() => {
    if (!user && cartItems.length > 0) {
      // Show auth modal immediately if user is not logged in and has items in cart
      setShowAuthModal(true);
      setAuthMode('login');
    }
  }, [user, cartItems.length]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const savedItems = [
    {
      id: 4,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: "/tech/1.jpg",
    },
    {
      id: 5,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: "/tech/2.jpg",
    },
    {
      id: 6,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: "/tech/3.jpg",
    },
  ];

  // Calculate cart totals  
  const itemsTotal = cartTotal;
  const shipping = 10.0;
  const tax = cartTotal * 0.08; // 8% tax
  const total = itemsTotal + shipping + tax;

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    // Check if user is logged in
    if (!user) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create order
      const order = createOrder(cartItems, {
        shippingAddress: "123 Main Street, New York, NY 10001",
        paymentMethod: "Credit Card"
      });
      
      // Clear cart
      clearCart();
      
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // After successful login, user can proceed with checkout manually
    // Don't auto-checkout to give user a chance to review their cart
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate('/orders');
  };

  if (isMobile) {
    return (
      <>
        <div className="px-4 py-4">
        {/* Mobile Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-4">Add some products to get started</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cartItems.map((item) => {
            const itemPrice = item.discount 
              ? item.price * (1 - item.discount / 100) 
              : item.price;
            
            return (
          <div
            key={item.id}
            className="flex justify-between border-b border-gray-200 py-4"
          >
            <div className="flex">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain bg-gray-100 rounded-md"
                />
              </div>
              <div className="ml-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">Brand: {item.brand}</p>
                  <p className="text-xs text-gray-500">Category: {item.category}</p>
                </div>
                <div className="flex items-center mt-1">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="text-gray-500 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    <FaMinus size={8} />
                  </button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="text-gray-500 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    <FaPlus size={8} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-medium">${itemPrice.toFixed(2)}</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 mt-6 text-xs"
              >
                Remove
              </button>
              <button className="text-gray-500 mt-2">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
            );
          })
        )}

        {/* Mobile Order Summary */}
        {cartItems.length > 0 && (
          <div className="mt-6">
          <h2 className="text-lg font-medium mb-3">
            Items ({cartItems.length})
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Items ({cartItems.length}):</span>
              <span>${itemsTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        )}

        {/* Checkout Button */}
        <button 
          onClick={handleCheckout}
          disabled={cartItems.length === 0 || isProcessing}
          className="w-full bg-green-500 text-white py-3 rounded-md font-medium mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Processing...
            </>
          ) : (
            `Checkout (${cartItems.length} items)`
          )}
        </button>

        {/* Saved for later */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Saved for later</h2>
          <div className="space-y-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-gray-200 pb-4"
              >
                <div className="flex">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain bg-gray-100 rounded-md"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm font-medium mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex space-x-3 mt-1">
                      <button className="text-blue-600 text-xs">
                        Move to cart
                      </button>
                      <button className="text-red-500 text-xs">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Auth Modal */}
        {showAuthModal && (
          <AuthModal 
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            mode={authMode}
            onSuccess={handleAuthSuccess}
          />
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <OrderSuccessModal 
            isOpen={showSuccessModal}
            onClose={handleSuccessModalClose}
          />
        )}
      </>
    );
  }

  return (
    <>
      {/* Desktop version */}
      <div className="px-0 md:px-16 lg:px-24 mt-2 md:mt-5 mb-6 md:mb-10">
      <h1 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 px-4 md:px-0">My cart ({cartItems.length})</h1>

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-0">
        {/* Left section - Cart items */}
        <div className="flex-grow">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started</p>
              <button 
                onClick={() => navigate('/products')}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemPrice = item.discount 
                ? item.price * (1 - item.discount / 100) 
                : item.price;
              
              return (
            <div
              key={item.id}
              className="flex border border-gray-200 rounded-md p-3 md:p-4 mb-4"
            >
              <div className="w-20 md:w-24 h-20 md:h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3 md:ml-4 flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm md:text-base">{item.name}</h3>
                  <p className="font-bold text-sm md:text-base">${itemPrice.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                <p className="text-sm text-gray-500">Category: {item.category}</p>
                <div className="flex justify-between mt-3">
                  <div className="flex">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mr-4"
                    >
                      Remove
                    </button>
                    <button className="text-blue-500 text-sm">
                      Save for later
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Qty:</span>
                    <select 
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
              );
            })
          )}

          {cartItems.length > 0 && (
            <div className="flex mt-6 mb-8">
            <button className="flex items-center text-blue-600">
              <FaArrowLeft className="mr-2" />
              <span>Back to shop</span>
            </button>
            <button 
              onClick={clearCart}
              className="ml-auto text-red-600"
            >
              Remove all
            </button>
          </div>
          )}

          {/* Security features */}
          <div className="flex flex-col md:flex-row justify-between mt-8 mb-10">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gray-100 p-3 rounded-full">
                <BsShieldCheck size={20} className="text-gray-500" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Secure payment</h3>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gray-100 p-3 rounded-full">
                <BsQuestionCircle size={20} className="text-gray-500" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Customer support</h3>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <MdOutlineLocalShipping size={20} className="text-gray-500" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Free delivery</h3>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </div>
            </div>
          </div>

          {/* Saved for later */}
          <div className="mt-10">
            <h2 className="text-xl font-medium mb-4">Saved for later</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {savedItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-md p-3"
                >
                  <div className="mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-28 object-contain"
                    />
                  </div>
                  <h3 className="text-sm">{item.name}</h3>
                  <p className="text-sm font-medium mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="bg-blue-50 text-blue-600 text-sm w-full py-1 rounded mt-2">
                    Move to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section - Order summary */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-80 flex-shrink-0">
          <div className="border border-gray-200 rounded-md p-3 md:p-4">
            <h2 className="text-lg font-medium mb-4">Have a coupon?</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Add coupon"
                className="border border-gray-300 rounded-l px-3 py-2 w-full focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
                Apply
              </button>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Items ({cartItems.length}):</span>
                <span className="font-medium">${itemsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-gray-600">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Tax:</span>
                <span className="text-gray-600">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="text-lg font-bold">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="bg-green-500 text-white w-full py-2 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    'Checkout'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-4 flex justify-center"></div>
        </div>
        )}
      </div>

      {/* Discount banner at bottom */}
      <div className="mt-12">
        <div className="bg-blue-600 text-white md:rounded-md flex flex-col md:flex-row items-center justify-between p-4 md:p-6 mx-4 md:mx-0 gap-4 md:gap-0">
          <div>
            <p className="font-medium">
              <span className="text-blue-200">Super discount</span> on more than
              <span className="text-blue-200"> 100 USD</span>
            </p>
            <p className="text-white opacity-70">
              Have you ever finally just write dummy info
            </p>
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded">
            Shop now
          </button>
        </div>
      </div>
    </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSuccess={handleAuthSuccess}
        />
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <OrderSuccessModal 
          isOpen={showSuccessModal}
          onClose={handleSuccessModalClose}
        />
      )}
    </>
  );
};

export default Checkout;

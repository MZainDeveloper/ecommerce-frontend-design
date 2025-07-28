import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const OrderSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideInUp">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes size={20} />
          </button>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <FaCheckCircle className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
            <p className="text-green-100">Thank you for your purchase</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                🎉 Your order has been confirmed and is being processed.
              </p>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation shortly with tracking details.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-gray-900">📦</div>
                <div className="text-sm text-gray-600">Processing</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-gray-900">🚚</div>
                <div className="text-sm text-gray-600">5-7 Days</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Orders
            </button>
            <button
              onClick={() => {
                onClose();
                window.location.href = '/';
              }}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
import React from 'react';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="px-0 md:px-16 lg:px-24">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 px-4 md:px-0">Help & Support</h1>
        
        <div className="bg-white md:rounded-lg shadow-md p-4 md:p-6 mx-4 md:mx-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">How can we help you?</h2>
          <p className="text-gray-600 mb-4 md:mb-6">
            Find answers to common questions or get in touch with our support team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Frequently Asked Questions</h3>
              <p className="text-gray-600 text-sm">
                Browse our FAQ section for quick answers to common questions.
              </p>
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                View FAQs →
              </button>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">💬 Contact Support</h3>
              <p className="text-gray-600 text-sm">
                Get in touch with our customer support team for personalized assistance.
              </p>
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Contact Us →
              </button>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">📞 Live Chat</h3>
              <p className="text-gray-600 text-sm">
                Chat with our support team in real-time for immediate help.
              </p>
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Start Chat →
              </button>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">📚 User Guide</h3>
              <p className="text-gray-600 text-sm">
                Learn how to use our platform with our comprehensive user guide.
              </p>
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read Guide →
              </button>
            </div>
          </div>
          
          {/* Quick Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🚀 Quick Help</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🛒</div>
                <h4 className="font-medium text-gray-800 mb-1">How to Order</h4>
                <p className="text-xs text-gray-600">Step-by-step ordering guide</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">💳</div>
                <h4 className="font-medium text-gray-800 mb-1">Payment Methods</h4>
                <p className="text-xs text-gray-600">Accepted payment options</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">🚚</div>
                <h4 className="font-medium text-gray-800 mb-1">Shipping Info</h4>
                <p className="text-xs text-gray-600">Delivery times and costs</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">↩️</div>
                <h4 className="font-medium text-gray-800 mb-1">Returns</h4>
                <p className="text-xs text-gray-600">Return policy and process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
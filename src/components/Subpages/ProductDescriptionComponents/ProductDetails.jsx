import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-3/4">
      {/* Product Info Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6 px-6">
          <button className="text-blue border-b-2 border-blue pb-2 font-medium">
            Description
          </button>
          <button className="text-gray-500 pb-2 font-medium">Reviews</button>
          <button className="text-gray-500 pb-2 font-medium">Shipping</button>
          <button className="text-gray-500 pb-2 font-medium">
            About seller
          </button>
        </div>
      </div>

      {/* Description Content */}
      <div className="px-6 py-4">
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Duis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        {/* Specifications */}
        <div className="mt-6">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-2 text-gray-500 w-1/3">Model</td>
                <td className="py-2">AB78GH87</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-500">Style</td>
                <td className="py-2">Classic style</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-500">Certificate</td>
                <td className="py-2">ISO-8998212312</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-500">Size</td>
                <td className="py-2">34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-500">Memory</td>
                <td className="py-2">36GB RAM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features List */}
        <div className="mt-6">
          <ul className="list-inside space-y-2">
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Some great feature name here
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Lorem ipsum dolor sit amet, consectetur
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Duis aute irure dolor in reprehenderit
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Some great feature name here
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

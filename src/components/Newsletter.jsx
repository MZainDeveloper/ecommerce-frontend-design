import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="bg-newsletter mt-8">
      <div className="py-8 md:py-10 container flex flex-col text-center px-4 md:px-0">
        <h1 className="text-black font-semibold text-lg md:text-xl">
          Subscribe on our newsletter
        </h1>
        <p className="text-newsletter-text font-light text-sm md:text-base mt-2">
          Get daily news on upcoming offers from many supplies all over the
          world
        </p>
        <div className="flex flex-col md:flex-row items-center mx-auto mt-4 gap-3 w-full max-w-lg">
          <div className="flex items-center w-full bg-white rounded-md py-2 px-3 shadow-sm">
            <FaRegEnvelope size={20} className="text-desc mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent outline-none text-base md:text-lg text-desc w-full"
            />
          </div>
          <button className="w-full md:w-auto bg-blue text-white rounded-md px-4 py-2 hover:bg-blue/90 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

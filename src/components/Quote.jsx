import React from "react";

const Quote = () => {
  return (
    <div className="mt-4">
      <div className="bg-white w-[100%] md:container md:mx-auto md:rounded-md">
        <div className="flex justify-between bg md:rounded-md overflow-hidden">
          <div className="md:w-1/2 flex flex-col p-4 gap-3 md:px-4 md:py-10 text-white">
            <h1 className="font-semibold text-xl md:text-3xl tracking-wide">
              An easy way to send <br /> requests to all suppliers
            </h1>
            <p className="hidden md:block md:font-light md:tracking-wider">
              Easily connect with all your suppliers in just a few clicks. Save
              time <br /> by sending requests in bulk.
            </p>
            <button className="md:hidden bg-blue text-white font-medium rounded-md px-4 py-1 w-fit mt-3">
              Send inquiry
            </button>
          </div>
          {/* Form */}
          <div className="hidden md:block md:bg-white md:text-black md:rounded-lg md: shadow-md md:p-8 md:mx-6 md:my-6 md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              Send quote to suppliers
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="What item you need?"
                className="w-full border border-gray-200 rounded-md px-2 py-3 text-md text-black focus:outline-none font-light placeholder-black"
              />{" "}
              <textarea
                placeholder="Type more details"
                className="w-full border border-gray-200 rounded-md px-2 py-3 text-md h-24 text-black focus:outline-none font-light placeholder-gray-400"
              ></textarea>{" "}
              <div className="flex gap-2 flex-wrap">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="flex-grow min-w-0 border border-gray-200 rounded-md px-2 py-2 text-md text-black focus:outline-none font-light placeholder-black"
                />
                <select className="border border-gray-200 rounded-md px-2 py-2 text-sm bg-white flex-shrink-0">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Tons</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors w-auto self-start">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

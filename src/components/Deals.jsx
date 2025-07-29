import React from "react";
import watch from "/8.jpg";
import laptop from "/7.jpg";
import camera from "/6.jpg";
import jug from "/10.jpg";
import mobile from "/3.jpg";

const Deals = () => {
  const deals = [
    { id: 1, number: "04", text: "Days" },
    { id: 2, number: "13", text: "Hour" },
    { id: 3, number: "34", text: "min" },
    { id: 4, number: "56", text: "Sec" },
  ];

  const items = [
    { image: watch, name: "Smart watches", discount: "-25%" },
    { image: laptop, name: "Laptops", discount: "-15%" },
    { image: camera, name: "GoPro cameras", discount: "-10%" },
    { image: jug, name: "Kettle", discount: "-5%" },
    { image: mobile, name: "Mobile phones", discount: "-20%" },
  ];

  return (
    <div className="mt-8">
      <div className="bg-white p-3 sm:p-4 w-full sm:container sm:mx-auto sm:rounded-md sm:border sm:border-gray-200 sm:px-4 md:px-6 sm:py-4">
        {/* Mobile Layout */}
        <div className="sm:hidden">
          {" "}
          <div className="flex justify-between items-center">
            <div className="flex flex-col mb-4">
              <h2 className="text-black text-base font-semibold">
                Deals and offers
              </h2>
              <p className="text-xs text-equipment font-light">
                Electronic equipments
              </p>
            </div>

            <div className="flex items-center gap-1 mb-4">
              {deals.map(
                (deal, index) =>
                  index !== 0 && (
                    <div
                      key={deal.id}
                      className="flex flex-col items-center bg-newsletter px-2 py-1"
                    >
                      <p className="font-bold text-desc text-xs">
                        {deal.number}
                      </p>
                      <p className="text-xs text-desc">{deal.text}</p>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-thin">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 border border-border flex flex-col justify-center items-center gap-2 px-3 py-2 w-[140px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain mb-1"
                />
                <p className="font-light text-center leading-4 text-xs">
                  {item.name}
                </p>
                <p className="text-xs text-red bg-red-border rounded-full px-2 py-1 font-semibold">
                  {item.discount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-0">
            {/* Left Column: Deals and Offers */}
            <div className="flex flex-col justify-center sm:col-span-1">
              <h2 className="text-black text-sm sm:text-base md:text-lg font-bold">
                Deals and offers
              </h2>
              <p className="text-xs sm:text-sm text-icons">
                Electronic equipments
              </p>
              <div className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2">
                {deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="flex flex-col items-center bg-gray rounded-md text-white px-2 sm:px-3 py-1 sm:py-2"
                  >
                    <p className="font-bold text-xs sm:text-sm">
                      {deal.number}
                    </p>
                    <p className="text-xs">{deal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Columns: Product Grid */}
            <div className="sm:col-span-5 sm:ml-4 md:ml-8 lg:ml-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="h-full border-l border-border flex flex-col justify-center items-center gap-1 sm:gap-2 px-1 sm:px-2 py-2 sm:py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 sm:w-24 sm:h-32 md:w-32 md:h-40 lg:w-42 lg:h-48 object-contain mb-1"
                  />
                  <p className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-center leading-4 sm:leading-5 md:leading-6">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm text-red bg-red-border rounded-full px-2 sm:px-3 py-1 sm:py-2 font-semibold">
                    {item.discount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

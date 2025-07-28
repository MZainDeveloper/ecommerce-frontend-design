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
      <div className="bg-white p-4 w-[100%] md:container md:mx-auto md:rounded-md md:border md:border-gray-200 md:px-6 md:py-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {" "}
          <div className="flex justify-between items-center">
            <div className="flex flex-col mb-4">
              <h2 className="text-black text-lg font-semibold">
                Deals and offers
              </h2>
              <p className="text-sm text-equipment font-light">
                Electronic equipments
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              {deals.map(
                (deal, index) =>
                  index !== 0 && (
                    <div
                      key={deal.id}
                      className="flex flex-col items-center bg-newsletter px-3 py-1"
                    >
                      <p className="font-bold text-desc">{deal.number}</p>
                      <p className="text-xs text-desc">{deal.text}</p>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 border border-border flex flex-col justify-center items-center gap-2 px-4 py-3 w-[160px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain mb-1"
                />
                <p className="font-light text-center leading-5">{item.name}</p>
                <p className="text-xs text-red bg-red-border rounded-full px-3 py-1 font-semibold">
                  {item.discount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6">
            {/* Left Column: Deals and Offers */}
            <div className="flex flex-col justify-center">
              <h2 className="text-black text-lg font-bold">Deals and offers</h2>
              <p className="text-sm text-icons">Electronic equipments</p>
              <div className="mt-4 flex items-center gap-2">
                {deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="flex flex-col items-center bg-gray rounded-md text-white px-3 py-2"
                  >
                    <p className="font-bold">{deal.number}</p>
                    <p className="text-sm">{deal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Columns: Product Grid */}
            <div className="col-span-5 ml-20 grid grid-cols-5 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="h-full border-l border-border flex flex-col justify-center items-center gap-2 px-2 py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-42 h-48 object-contain mb-1"
                  />
                  <p className="font-light text-lg text-center leading-6">
                    {item.name}
                  </p>
                  <p className="text-sm text-red bg-red-border rounded-full px-3 py-2 font-semibold">
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

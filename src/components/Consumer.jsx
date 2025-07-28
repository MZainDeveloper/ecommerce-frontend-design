import React from "react";
// Images
import ipad from "/tech/2.jpg";
import electronics from "/electronics.jpg";
import blender from "/interior/8.jpg";
import securitycamera from "/tech/camera-2.png";
import graphiccard from "/tech/gpu.png";
import watch from "/8.jpg";
import laptop from "/7.jpg";
import camera from "/6.jpg";
import jug from "/10.jpg";
import mobile from "/3.jpg";
// Icons
import { GoArrowRight } from "react-icons/go";

const Consumer = () => {
  const items = [
    { image: watch, name: "Smart Watches", text: "From USD 250" },
    { image: camera, name: "Cameras", text: "From USD 380" },
    { image: jug, name: "Electric Kettle", text: "From USD 38" },
    { image: laptop, name: "Laptops", text: "From USD 340" },
    { image: mobile, name: "SmartPhones", text: "From USD 310" },
    { image: securitycamera, name: "Security Camera", text: "From USD 390" },
    { image: graphiccard, name: "Graphic Cards", text: "From USD 1900" },
    { image: ipad, name: "Ipads", text: "From USD 850" },
  ];

  return (
    <div className="mt-4">
      <div className="bg-white w-[100%] md:container md:mx-auto md:rounded-md md:border md:border-gray-200">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <h2 className="text-black text-xl font-semibold p-4 border-b border-gray-200/60">
            Consumer electronics and gadgets
          </h2>
          <div className="flex overflow-x-auto pb-4 scrollbar-thin">
            <div className="flex border-r border-l border-b border-gray-200/60">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 border-r border-gray-200/60 last:border-r-0 w-[160px] flex flex-col items-center p-4"
                >
                  <div className="flex justify-center ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <p className="text-center font-medium text-sm">{item.name}</p>
                  <p className="text-center text-xs text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center p-4 gap-2 border-b border-gray-200">
            <a href="#" className="text-blue-500 flex items-center">
              Source now
            </a>
            <GoArrowRight size={24} className="font-bold text-blue" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[350px_1fr]">
            {/* Left Column: Consumer - now with fixed width */}
            <div className="relative h-full bg-box-1">
              <img
                src={electronics}
                alt="Mobile"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute top-6 left-6 z-10">
                <h2 className="text-black text-xl font-semibold">
                  Consumer <br /> electronics and <br /> gadgets
                </h2>
                <button className="bg-white mt-4 px-4 py-2 rounded-md">
                  Source now
                </button>
              </div>
            </div>

            {/* Right Columns: Product Grid */}
            <div className="grid grid-cols-4">
              {items.map((item, index) => {
                // Calculate row and column position
                const row = Math.floor(index / 4);
                const col = index % 4;

                return (
                  <div
                    key={index}
                    className={`h-full flex flex-col justify-between px-4 py-4
                      ${col > 0 ? "border-l border-gray-200" : ""}
                      ${row > 0 ? "border-t border-gray-200" : ""}`}
                  >
                    <div>
                      <p className="font-medium text-base">{item.name}</p>
                      <p className="text-sm text-icons">{item.text}</p>
                    </div>

                    <div className="flex justify-end mt-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumer;

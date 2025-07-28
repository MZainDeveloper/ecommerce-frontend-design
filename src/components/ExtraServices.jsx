import React from "react";
// Images
import industry from "/image108.png";
import rainbow from "/image104.png";
import aeroplane from "/image106.png";
import man from "/image107.png";
// Icons
import { IoMdSearch } from "react-icons/io";
import { RiHome3Line } from "react-icons/ri";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
const ExtraServices = () => {
  const services = [
    {
      image: industry,
      text: "Source from\nIndustry Hubs",
      icon: <IoMdSearch size={32} className=" " />,
    },
    {
      image: rainbow,
      text: "Customize Your\nProducts",
      icon: <RiHome3Line size={32} className=" " />,
    },
    {
      image: aeroplane,
      text: "Fast, reliable shipping\nby ocean or air",
      icon: <BsFillArrowRightCircleFill size={32} className=" " />,
    },
    {
      image: man,
      text: "Product monitoring\nand inspection",
      icon: <MdOutlineSecurity size={32} className=" " />,
    },
  ];
  return (
    <div className="mt-6">
      <div className="w-[100%] md:container md:mx-auto ">
        <h1 className="text-black font-semibold text-xl md:text-2xl px-4 md:px-0">
          Our extra services
        </h1>

        {/* Mobile layout - horizontal scrolling */}
        <div className="mt-4 flex overflow-x-auto pb-6 gap-4 md:hidden scrollbar-thin p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] border border-gray-200/60 bg-white rounded-md relative shadow-sm"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt="service"
                  className="w-full h-36 rounded-t-md object-cover brightness-75 contrast-125"
                />
                <div className="absolute bg-service-bg right-4 -bottom-6 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>
              <p className="text-black font-medium text-sm px-4 pt-8 pb-4 whitespace-pre-line">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop layout - grid */}
        <div className="mt-4 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-md relative border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt="service"
                className="w-full h-32 rounded-t-md object-cover brightness-75 contrast-150 opacity-100"
              />
              <div className="absolute bg-service-bg right-6 bottom-16 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                {service.icon}
              </div>
              <p className="text-black font-medium line-height-1 px-6 py-6 whitespace-pre-line">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;

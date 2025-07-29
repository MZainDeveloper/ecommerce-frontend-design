import React from "react";
// Flag images
import australia from "/flags/australia.png";
import china from "/flags/china.png";
import france from "/flags/france.png";
import germany from "/flags/germany.png";
import dubai from "/flags/dubai.png";
import italy from "/flags/itlay.png";
import russia from "/flags/russia.png";
import scotland from "/flags/scotland.png";
import usa from "/flags/usa.png";
import england from "/flags/england.png";

const Suppliers = () => {
  const flags = [
    {
      image: dubai,
      name: "Arabic Emirates",
      text: "shopname.ae",
    },
    {
      image: australia,
      name: "Australia",
      text: "shopname.com.au",
    },
    {
      image: china,
      name: "China",
      text: "shopname.com.cn",
    },
    {
      image: france,
      name: "France",
      text: "shopname.com.fr",
    },
    {
      image: germany,
      name: "Germany",
      text: "shopname.com.gr",
    },
    {
      image: italy,
      name: "Itlay",
      text: "shopname.com.it",
    },
    {
      image: russia,
      name: "Russia",
      text: "shopname.com.ru",
    },
    {
      image: scotland,
      name: "Scotland",
      text: "shopname.com.sc",
    },
    {
      image: usa,
      name: "USA",
      text: "shopname.com.us",
    },
    {
      image: england,
      name: "England",
      text: "shopname.co.uk",
    },
  ];
  return (
    <div className="mt-6">
      <div className="w-[100%] p-4 md:container md:mx-auto md:px-0">
        <h1 className="text-black font-semibold text-2xl">
          Suppliers by region
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {flags.map((flag, index) => (
            <div key={index} className="text-black">
              <div className="flex items-center gap-2">
                <img
                  src={flag.image}
                  alt={flag.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <p className="font-light">{flag.name}</p>
                  <p className="text-sm text-desc">{flag.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;

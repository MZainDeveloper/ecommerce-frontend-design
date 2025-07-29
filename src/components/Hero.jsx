import { React, useState } from "react";
import HeroBox1 from "./HeroBox1";
import HeroBox2 from "./HeroBox2";
import HeroBox3 from "./HeroBox3";
const Hero = () => {
  const categories = [
    {
      name: "Automobiles",
    },
    {
      name: "Clothes and wear",
    },
    {
      name: "Home interiors",
    },
    {
      name: "Compuer and tech",
    },
    {
      name: "Tools, equipments",
    },
    {
      name: "Sports and outdoor",
    },
    {
      name: "Food items",
    },
    {
      name: "Machinery tools",
    },
    {
      name: "More category",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-4">
      <div className="w-[100%] md:container md:mx-auto md:bg-white md:rounded-md md:border-1 md:border-border md:px-6 md:py-4 ">
        <div className="grid grid-cols-5 grid-rows-1 gap-4 md:min-h-[450px] ">
          {/* Left Side - Col 1 */}
          <div className="hidden md:flex md:flex-col md:gap-1.5">
            {categories.map((category, i) => (
              <div
                key={i}
                className={`py-2 px-2 rounded-md cursor-pointer transition-colors ${
                  i === activeIndex
                    ? "bg-hover text-black font-bold"
                    : "text-hero-text"
                }`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <p className="text-hero-text">{category.name}</p>
              </div>
            ))}
          </div>
          {/* Mid Side - Col 2-4 */}
          <div className="col-span-5 md:col-span-3 relative md:flex md:items-center md:justify-center">
            {/* Text overlay */}
            <div className="absolute top-10 left-10 md:top-15 md:left-28 z-10">
              <p className="text-2xl font-light text-black tracking-wide">
                Latest trending
              </p>
              <h2 className="text-3xl font-bold text-black mb-4">
                Electronic items
              </h2>
              <button className="bg-white px-4 py-2 md:py-3 rounded-md text-sm text-blue">
                Learn more
              </button>
            </div>
            <img
              src="/main11.png"
              alt="Laptop and Mobile"
              className="h-full w-full md:max-w-[930px] object-cover"
            />
          </div>
          {/* Right Side - Col 3 */}
          <div className="hidden md:flex md:flex-col md:justify-between ">
            {/* Box 1 */}
            <HeroBox1 />
            {/* Box 2 */}
            <HeroBox2 />
            {/* Box 3 */}
            <HeroBox3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

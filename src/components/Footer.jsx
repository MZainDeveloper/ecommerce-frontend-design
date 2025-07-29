import React from "react";
// Images
import logo from "/logo-colored.svg";
import apple from "/apple2.png";
import google from "/google2.png";
// Icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  const footer = [
    {
      title:
        "Follow us on social media for the latest updates and exclusive deals. Shop smart, shop Brandify.",
      links: (
        <div className="flex gap-4">
          <FaFacebook
            size={24}
            className="text-icons-2 hover:opacity-80 cursor-pointer"
          />
          <FaLinkedin
            size={24}
            className="text-icons-2 hover:opacity-80 cursor-pointer"
          />
          <FaYoutube
            size={24}
            className="text-icons-2 hover:opacity-80 cursor-pointer"
          />
          <AiFillInstagram
            size={24}
            className="text-icons-2 hover:opacity-80 cursor-pointer"
          />
        </div>
      ),
    },
    {
      title: "About",
      links: ["About Us", "Find store", "Categories", "Blogs"],
    },
    {
      title: "Partnership",
      links: ["Contact Us", "Returns", "Shipping Info", "FAQs"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    {
      title: "For users",
      links: ["Login", "Register", "Settings", "My Orders"],
    },
    {
      title: "Get app",
      links: (
        <div className="flex md:flex-col gap-2">
          <img src={apple} alt="Apple Store" className="w-32 md:w-36" />
          <img src={google} alt="Google Play" className="w-32 md:w-36" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="w-full py-6 sm:py-8 md:py-10 p-3 sm:p-4 px-3 sm:px-4 md:px-16 lg:px-24">
          {/* Mobile Footer */}
          <div className="sm:hidden">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <img src={logo} alt="Logo" className="w-28 mb-1" />
                <p className="text-desc text-xs">{footer[0].title}</p>
                <div className="flex gap-5">
                  <FaFacebook
                    size={20}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <FaLinkedin
                    size={20}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <FaYoutube
                    size={20}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <AiFillInstagram
                    size={20}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {footer.slice(1, 5).map((item, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <p className="font-medium text-black text-xs">
                      {item.title}
                    </p>
                    {Array.isArray(item.links) && (
                      <div className="flex flex-col gap-1">
                        {item.links.map((link, i) => (
                          <p
                            key={i}
                            className="text-desc text-xs leading-relaxed"
                          >
                            {link}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <p className="font-medium text-black text-xs mb-2">
                  {footer[5].title}
                </p>
                <div className="flex gap-2">
                  <img src={apple} alt="Apple Store" className="w-28 h-10" />
                  <img src={google} alt="Google Play" className="w-28 h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Footer */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {footer.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 sm:gap-3">
                  {index === 0 && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="mb-1 sm:mb-2 w-24 sm:w-28 md:w-32"
                    />
                  )}
                  <p
                    className={`font-light text-xs sm:text-sm ${
                      index === 0 ? "text-desc" : "text-black font-medium"
                    }`}
                  >
                    {item.title}
                  </p>
                  {Array.isArray(item.links) ? (
                    <div className="flex flex-col gap-1 sm:gap-2">
                      {item.links.map((link, i) => (
                        <p
                          key={i}
                          className="text-desc font-light hover:text-gray-600 cursor-pointer transition-colors text-xs sm:text-sm"
                        >
                          {link}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="text-desc font-light text-xs sm:text-sm">
                      {item.links}
                    </div>
                  )}
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;

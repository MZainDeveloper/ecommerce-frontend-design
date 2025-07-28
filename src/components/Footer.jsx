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
        <div className="w-[100%] md:py-10 p-4 px-4 md:px-16 lg:px-24">
          {/* Mobile Footer */}
          <div className="md:hidden">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <img src={logo} alt="Logo" className="w-32 mb-1" />
                <p className="text-desc text-sm">{footer[0].title}</p>
                <div className="flex gap-5">
                  <FaFacebook
                    size={22}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <FaLinkedin
                    size={22}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <FaYoutube
                    size={22}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                  <AiFillInstagram
                    size={22}
                    className="text-icons-2 hover:opacity-80 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {footer.slice(1, 5).map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="font-medium text-black text-sm">
                      {item.title}
                    </p>
                    {Array.isArray(item.links) && (
                      <div className="flex flex-col gap-2">
                        {item.links.map((link, i) => (
                          <p key={i} className="text-desc text-xs">
                            {link}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <p className="font-medium text-black text-sm mb-3">
                  {footer[5].title}
                </p>
                <div className="flex gap-3">
                  <img src={apple} alt="Apple Store" className="w-32 h-12" />
                  <img src={google} alt="Google Play" className="w-32 h-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
              {footer.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  {index === 0 && (
                    <img src={logo} alt="Logo" className="mb-2 w-32" />
                  )}
                  <p
                    className={`font-light ${
                      index === 0 ? "text-desc" : "text-black font-medium"
                    }`}
                  >
                    {item.title}
                  </p>
                  {Array.isArray(item.links) ? (
                    <div className="flex flex-col gap-2">
                      {item.links.map((link, i) => (
                        <p
                          key={i}
                          className="text-desc font-light hover:text-gray-600 cursor-pointer transition-colors"
                        >
                          {link}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="text-desc font-light">{item.links}</div>
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

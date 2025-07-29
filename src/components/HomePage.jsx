import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Deals from "./Deals";
import Outdoor from "./Outdoor";
import Consumer from "./Consumer";
import Quote from "./Quote";
import Recommended from "./Recommended";
import ExtraServices from "./ExtraServices";
import Suppliers from "./Suppliers";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getSectionAnimation = (sectionId) => {
    return visibleSections.has(sectionId)
      ? "animate-slideInUp"
      : "opacity-0 translate-y-10";
  };

  return (
    <div
      className={`bg-gray-50 min-h-screen transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <section
        id="hero"
        data-section
        aria-label="Hero Banner"
        className="animate-fadeIn px-0 md:px-16 lg:px-24 pt-2 md:pt-4"
      >
        <Hero />
      </section>

      {/* Deals Section */}
      <section
        id="deals"
        data-section
        aria-label="Deals and Offers"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "deals"
        )}`}
      >
        <Deals />
      </section>

      {/* Outdoor Section */}
      <section
        id="outdoor"
        data-section
        aria-label="Outdoor Products"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "outdoor"
        )}`}
      >
        <Outdoor />
      </section>

      {/* Consumer Electronics Section */}
      <section
        id="consumer"
        data-section
        aria-label="Consumer Electronics"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "consumer"
        )}`}
      >
        <Consumer />
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        data-section
        aria-label="Request Quote"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "quote"
        )}`}
      >
        <Quote />
      </section>

      {/* Recommended Section */}
      <section
        id="recommended"
        data-section
        aria-label="Recommended Products"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "recommended"
        )}`}
      >
        <Recommended />
      </section>

      {/* Extra Services Section */}
      <section
        id="services"
        data-section
        aria-label="Extra Services"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "services"
        )}`}
      >
        <ExtraServices />
      </section>

      {/* Suppliers Section */}
      <section
        id="suppliers"
        data-section
        aria-label="Suppliers"
        className={`px-0 md:px-16 lg:px-24 pt-2 md:pt-4 transition-all duration-700 ${getSectionAnimation(
          "suppliers"
        )}`}
      >
        <Suppliers />
      </section>

      {/* Loading overlay for smooth transitions */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="spinner mb-4"></div>
            <p className="text-gray-600 animate-pulse">
              Loading amazing deals...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

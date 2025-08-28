"use client";

import { ArrowRight, Home, Shield, Building, Compass } from "lucide-react";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <>
      {/* Hero section */}
      <div className="relative bg-[#001e5a] rounded-2xl mt-24 mx-[9px] overflow-hidden pb-10">
        <div className="min-h-[530px] md:min-h-[620px] lg:min-h-[760px] relative">
          {/* Decorative Images */}
          {/* Bottom-left image */}
          <img
            src="/images/hero_left.avif"
            alt="Decorative left"
            className="absolute bottom-[-380px] left-[-380px] h-232  object-contain"
          />

          {/* Top-right image */}
          <img
            src="/images/hero_right.avif"
            alt="Decorative right"
            className="absolute top-[-240px] right-[-400px] md:right-[-700px] lg:right-[-1090px] h-340 object-contain"
          />

          {/* Absolute content with responsive padding */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-4 text-white px-[clamp(20px,5vw,100px)]">
            <div className="w-full max-w-[1324px] mx-auto h-full flex flex-col">
              {/* Marquee */}
              <div className="mt-24">
                <Marquee />
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance mt-8">
                Find Your Next Space—
                <br />
                Modern, Elegant, Effortless.
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-xl">
                From stylish apartments to premium commercial spaces in
                Dhaka—explore, buy, or list with confidence.
              </p>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-white text-[#001e5a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                  List a Property
                </button>
                <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  Buy or Rent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid section */}
      <div className="relative">
        {/* Absolutely positioned grid aligned with hero content */}
        <div className="absolute left-0 right-0 md:bottom-[-52px] px-[clamp(20px,5vw,100px)] w-full">
          <div className="max-w-[1324px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 text-black">
            {/* Cards */}
            {[
              {
                icon: <Home className="w-6 h-6 text-[#001e5a]" />,
                text: "Elegant modern designs",
              },
              {
                icon: <Shield className="w-6 h-6 text-[#001e5a]" />,
                text: "Verified listings",
              },
              {
                icon: <Building className="w-6 h-6 text-[#001e5a]" />,
                text: "Commercial & residential",
                hideMd: true,
              },
              {
                icon: <Compass className="w-6 h-6 text-[#001e5a]" />,
                text: "Easy listing & selling process",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow
                          p-6 md:flex md:items-center md:gap-4 md:py-6 lg:block lg:p-8
                          ${card.hideMd ? "md:hidden lg:block" : ""}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 min-h-[48px] bg-blue-50 rounded-3xl flex items-center justify-center
                            mb-4 md:mb-0 lg:mb-4"
                >
                  {card.icon}
                </div>

                {/* Text */}
                <p className="font-semibold text-gray-900">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for overlapping cards */}
      <div className="min-h-[330px] md:min-h-[360px] lg:min-h-[200px]"></div>
    </>
  );
}

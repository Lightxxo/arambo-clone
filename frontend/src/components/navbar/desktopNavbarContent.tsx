"use client";

import type React from "react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopNavbarContent() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  // ✅ Use imported image variables
  const dropdownContent = {
    residential: {
      title: "RESIDENTIAL PROPERTIES",
      firstItem: "Buy",
      items: ["Rent", "For Bachelor", "For Woman", "For Family"],
      image: "/images/Navbar_Residential.jpg",
    },
    commercial: {
      title: "COMMERCIAL PROPERTIES",
      firstItem: "Office Spaces",
      items: ["Retail Shops", "Warehouses", "Co-working", "Industrial"],
      image: "/images/Navbar_Commercial.png",
    },
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleDropdownLeave = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY;
    if (mouseY > rect.bottom) setHoveredItem(null);
  };

  const firstItemClasses = "mb-6 mt-4";

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center w-full mx-auto"
        style={{
          maxWidth: "1550px",
          paddingLeft: "clamp(0px, 5vw, 100px)",
          paddingRight: "clamp(120px, 5vw, 120px)",
          maxHeight: "44px",
        }}
      >
        {/* Logo */}
        <div>
          <Link to="/" className="flex flex-col">
            <img
              src="/images/Navbar_Logo.png"
              alt="Arambo logo"
              className="h-8 w-auto"
            />
            <span className="text-xs text-gray-600 mt-0 ml-1 self-end">
              Beta
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-[17px]">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/") ? "text-blue-600 font-bold" : ""
            }`}
            onMouseEnter={() => setHoveredItem(null)}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("residential")}
          >
            <Link
              to="/residential"
              className={`transition-colors ${
                isActive("/residential") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Residential
            </Link>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("commercial")}
          >
            <Link
              to="/commercial"
              className={`transition-colors ${
                isActive("/commercial") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Commercial
            </Link>
          </div>

          <Link
            to="/about"
            className={`transition-colors ${
              isActive("/about") ? "text-blue-600 font-bold" : ""
            }`}
            onMouseEnter={() => setHoveredItem(null)}
          >
            About Us
          </Link>
        </div>

        {/* Button */}
        <div>
          <button className="bg-blue-800 text-white font-bold text-sm rounded-md px-6 py-[18px] leading-none text-center">
            List Property
          </button>
        </div>
      </div>

      <AnimatePresence>
        {hoveredItem &&
          dropdownContent[hoveredItem as keyof typeof dropdownContent] && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute translate-y-6 top-full left-0 right-0 bg-white z-50 overflow-hidden"
              onMouseLeave={handleDropdownLeave}
            >
              <div
                className="flex justify-between items-start w-full mx-auto py-8 mt-6"
                style={{
                  maxWidth: "1550px",
                  paddingLeft: "clamp(0px, 5vw, 100px)",
                  paddingRight: "clamp(0px, 5vw, 100px)",
                }}
              >
                {/* Left side - Content */}
                <div className="max-w-md">
                  <h3 className="text-blue-600 font-semibold text-[14px] mb-6 uppercase tracking-[0.2em]">
                    {
                      dropdownContent[
                        hoveredItem as keyof typeof dropdownContent
                      ].title
                    }
                  </h3>

                  <div>
                    {/* First item displayed separately above */}
                    <Link
                      to={`/${hoveredItem}/${dropdownContent[
                        hoveredItem as keyof typeof dropdownContent
                      ].firstItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className={`text-gray-500 hover:text-black transition-colors font-semibold py-1 text-base block ${firstItemClasses}`}
                    >
                      {
                        dropdownContent[
                          hoveredItem as keyof typeof dropdownContent
                        ].firstItem
                      }
                    </Link>

                    {/* Remaining items in 2x2 grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {dropdownContent[
                        hoveredItem as keyof typeof dropdownContent
                      ].items.map((item, index) => (
                        <Link
                          key={index}
                          to={`/${hoveredItem}/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-gray-500 hover:text-black font-semibold transition-colors py-1 text-base"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - Image */}
                <div className="ml-12 mb-4">
                  <img
                    src={
                      dropdownContent[
                        hoveredItem as keyof typeof dropdownContent
                      ].image
                    }
                    alt={`${hoveredItem} properties`}
                    className="w-90 h-62 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}

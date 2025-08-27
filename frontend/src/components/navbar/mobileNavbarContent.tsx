"use client";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbarContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Framer Motion variants for slide down/up
  const dropdownVariants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
  };

  return (
    <div className="relative max-h-[44px]">
      {/* Header bar */}
      <div className="flex justify-between items-center pl-[clamp(20px,5vw,40px)] pr-[clamp(20px,5vw,40px)]">
        {/* Logo */}
        <div>
          <Link to="/" className="flex flex-col" onClick={closeMenu}>
            <img
              src="/images/Navbar_Logo.png"
              alt="Arambo logo"
              className="h-[24px] w-auto"
            />
            <span className="text-[8px] text-gray-600 mt-0 ml-1 self-end">
              Beta
            </span>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-1">
          {/* List Property Button */}
          <button className="bg-blue-800 text-white font-bold text-sm rounded-md px-4 py-4  leading-none">
            List Property
          </button>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className=" text-black transition-colors mx-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <RiMenu4Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 z-50 overflow-hidden"
          >
            <div className="bg-white border-t border-gray-200 px-10 py-6 space-y-4 ">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block text-lg font-bold transition-colors ${
                  isActive("/") ? "text-blue-600 font-black" : "text-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                to="/residential"
                onClick={closeMenu}
                className={`block text-lg font-bold transition-colors ${
                  isActive("/residential")
                    ? "text-blue-600 font-black"
                    : "text-gray-700"
                }`}
              >
                Residential
              </Link>

              <Link
                to="/commercial"
                onClick={closeMenu}
                className={`block text-lg font-bold transition-colors ${
                  isActive("/commercial")
                    ? "text-blue-600 font-black"
                    : "text-gray-700"
                }`}
              >
                Commercial
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className={`block text-lg font-bold transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-black"
                    : "text-gray-700"
                }`}
              >
                About Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

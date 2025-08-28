"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNavbarContent from "@/components/navbar/desktopNavbarContent";
import MobileNavbarContent from "@/components/navbar/mobileNavbarContent";
import { useMobile } from "@/hooks/useMobile";

export default function Navbar() {
  const isMobile = useMobile(1200);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasMounted, setHasMounted] = useState(false); // track first mount
  const lastScrollY = useRef(0);

  useEffect(() => {
    setHasMounted(true); // mark component as mounted
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down -> hide navbar
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current) {
        // scrolling up -> show navbar
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          key="navbar"
          className="w-full bg-white text-gray-500 py-6 fixed top-0 left-0 z-50"
          initial={hasMounted ? { y: -100, opacity: 0 } : false} // no animation on first mount
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "tween", ease: "easeOut", duration: 0.3 },
          }}
          exit={{
            y: -100,
            opacity: 0,
            transition: { type: "tween", ease: "easeIn", duration: 0.3 },
          }}
        >
          {isMobile ? <MobileNavbarContent /> : <DesktopNavbarContent />}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

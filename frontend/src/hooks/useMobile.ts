import { useState, useEffect } from "react";

export function useMobile(threshold = 1200) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < threshold : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < threshold);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isMobile;
}

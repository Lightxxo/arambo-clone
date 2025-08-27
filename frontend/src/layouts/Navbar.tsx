import DesktopNavbarContent from "@/components/navbar/desktopNavbarContent";
import MobileNavbarContent from "@/components/navbar/mobileNavbarContent";
import { useMobile } from "@/hooks/useMobile";

export default function Navbar() {
  const isMobile = useMobile(1200); // threshold <1200px

  return (
    <nav className="w-full bg-white text-gray-500 py-6">
      {isMobile ? (
        // Mobile view
        <MobileNavbarContent />
      ) : (
        // Desktop view
        <DesktopNavbarContent />
      )}
    </nav>
  );
}

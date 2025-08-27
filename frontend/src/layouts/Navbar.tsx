import DesktopNavbarContent from "@/components/navbar/desktopNavbarContent";
import { useMobile } from "@/hooks/useMobile";

export default function Navbar() {
  const isMobile = useMobile(1200); // threshold <1200px

  return (
    <nav className="w-full bg-white text-gray-500 py-6">
      {isMobile ? (
        // Mobile view
        <div className="flex justify-between items-center w-full px-4">
          {/* Replace these with your mobile logo/menu */}
          <span>Logo</span>
          <span>Menu</span>
        </div>
      ) : (
        // Desktop view
        <DesktopNavbarContent />
      )}
    </nav>
  );
}

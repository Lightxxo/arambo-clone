import type React from "react";
import { Mail, Phone } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`relative ${className}`}>
      <div
        className="relative flex flex-col justify-center items-center px-6 pt-14 lg:pt-24 pb-8 mx-4 md:pb-12 lg:pb-16 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url('/images/Footer_bg.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Container */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-8 md:mb-12 max-w-4xl mx-auto">
          {/* Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-10 max-w-4xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6  text-balance"
              style={{
                fontFamily:
                  '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                fontWeight: 700,

                lineHeight: "132%",
              }}
            >
              Ready to Move Forward?
            </h1>
            <p
              className="text-md md:text-lg text-white leading-relaxed px-4 max-w-160 "
              style={{
                fontFamily:
                  '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                letterSpacing: "-0.02em",
                lineHeight: "150%",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              Whether you're buying, renting, or listing—we're here to guide you
              every step of the way.
            </p>
          </div>

          <div className="flex flex-col w-full mb-20 md:flex-row gap-3 items-stretch md:max-w-sm mx-auto ">
            <button
              className="w-full sm:flex-1 bg-white text-black px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              style={{
                fontFamily:
                  '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: "132%",
                borderRadius: "8px",
                padding: "16px 24px",
              }}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </button>
            <button
              className="w-full sm:flex-1 text-white px-6 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              style={{
                fontFamily:
                  '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: "132%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "16px 24px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg max-w-333 mx-auto w-full">
          <div className="px-6 md:px-12 py-10 md:py-14">
            {/* Logo, Tagline and Links Container */}
            <div className="grid grid-cols-1 xl:grid-cols-6 gap-8 lg:gap-12 ">
              <div className="md:col-span-2">
                <div className="flex flex-col xl:flex-col xl:items-start md:flex-row md:items-center md:justify-between">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src="/images/Navbar_Logo.png"
                      className="w-32 h-auto"
                    />
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-sm leading-relaxed max-w-xs whitespace-nowrap 
                 mt-2 md:mt-0 md:text-right xl:text-left xl:mt-4"
                    style={{
                      color: "rgb(10, 10, 10)",
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: "1",
                    }}
                  >
                    From Listing to Living—
                    <br />
                    Smarter with Arambo.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {/* For Rent */}
                <div>
                  <h3
                    className="font-medium mb-4"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: "124%",
                      color: "rgb(10, 10, 10)",
                    }}
                  >
                    For Rent
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="./commercial"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Commercial
                      </a>
                    </li>
                    <li>
                      <a
                        href="./residential"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Residential
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Property */}
                <div>
                  <h3
                    className="font-medium mb-4"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: "124%",
                      color: "rgb(10, 10, 10)",
                    }}
                  >
                    Property
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="./properties-dhaka"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        For sale
                      </a>
                    </li>
                    <li>
                      <a
                        href="./list-your-property"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        List a property
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3
                    className="font-medium mb-4"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: "124%",
                      color: "rgb(10, 10, 10)",
                    }}
                  >
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="./about"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="./contact"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="./blog/top-trends-shaping-the-real-estate-market-in-2024-copy-copy/privacy-policy"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <span
                        className="cursor-default text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Term of service
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Find us at */}
                <div>
                  <h3
                    className="font-medium mb-4"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: "124%",
                      color: "rgb(10, 10, 10)",
                    }}
                  >
                    Find us at
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="http://facebook.com/profile.php?id=61579308507715"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/arambo.co/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/arambo-co/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-blue-600 transition-colors text-lg"
                        style={{
                          color: "rgb(111, 113, 118)",
                          letterSpacing: "-0.02em",
                          lineHeight: "150%",
                        }}
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 md:py-12">
        <p
          style={{
            fontFamily:
              '"Helvetica Neue", "Helvetica Neue Placeholder", sans-serif',
            fontWeight: 500,
            lineHeight: "140%",
            color: "rgb(10, 10, 10)",
            fontSize: "18px",
          }}
        >
          Arambo © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;

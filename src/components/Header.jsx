import { useState } from "react";
import veteranIcon from "../assets/img/veteran-icon.svg";
import logo from "../assets/img/pillows-logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div
        className="text-black py-1 px-2"
        style={{ backgroundColor: "#DFEEF7" }}
      >
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          {/* Left: Icon + Text */}
          <div className="flex items-center space-x-2">
            <img src={veteranIcon} alt="Veteran Icon" className="h-5 w-auto" />
            <span className="text-sm font-medium">Veteran Owned Business</span>
          </div>

          {/* Center: Text */}
          <div className="text-center w-full md:w-auto order-3 md:order-none mt-2 md:mt-0 text-sm">
            <b className="uppercase">Buy more save more. </b>
            Buy 2 of the same pillow Save 5%. Buy 4 of the same pillow Save 10%{" "}
            <span className="underline">See Details</span>
          </div>

          {/* Right: Contact Us */}
          <div>
            <a
              href="#contact"
              className="text-sm font-semibold hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="text-black py-3 px-4 bg-white shadow-sm">
        <div className="container mx-auto relative flex items-center justify-between">
          {/* Hamburger: Mobile only */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Logo - centered absolutely on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop nav center */}
          <div className="hidden md:flex space-x-6 flex-1 justify-center">
            <a href="#" className="text-sm font-medium hover:underline">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Shop
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Blog
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              FAQs
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Support
            </a>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium hover:underline cursor-pointer">
              search
            </span>
            <span className="text-sm font-medium hover:underline cursor-pointer">
              user
            </span>
            <span className="text-sm font-medium hover:underline cursor-pointer">
              cart
            </span>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 px-4 space-y-2">
            <a href="#" className="block text-sm font-medium hover:underline">
              Home
            </a>
            <a href="#" className="block text-sm font-medium hover:underline">
              Shop
            </a>
            <a href="#" className="block text-sm font-medium hover:underline">
              About
            </a>
            <a href="#" className="block text-sm font-medium hover:underline">
              Blog
            </a>
            <a href="#" className="block text-sm font-medium hover:underline">
              FAQs
            </a>
            <a href="#" className="block text-sm font-medium hover:underline">
              Support
            </a>
          </div>
        )}
      </div>
    </>
  );
}

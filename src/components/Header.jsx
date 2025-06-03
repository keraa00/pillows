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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </span>
            <span className="text-sm font-medium hover:underline cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </span>
            <span className="text-sm font-medium hover:underline cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"></path>
              </svg>
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

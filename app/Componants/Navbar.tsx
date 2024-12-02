"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect scroll direction to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true); // Scroll up
      } else {
        setIsVisible(false); // Scroll down
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <nav
        className={`bg-gray-800 text-white py-4 w-full fixed top-0 left-0 transition-all duration-300 ease-in-out z-50 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              KM <span className="text-yellow-500">Decor.</span>{" "}
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-white m-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:space-x-10 space-y-4 lg:space-y-0 absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-[#01050a8f] lg:bg-transparent transition-all duration-300 ease-in-out z-50 text-center mt-3 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link href="/" className="hover:text-gray-300 relative group">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/Bedroom"
                className="hover:text-gray-300 relative group"
              >
                Bedroom Sets
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/Beds" className="hover:text-gray-300 relative group">
                Beds
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/Dressers"
                className="hover:text-gray-300 relative group"
              >
                Dressings
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/Cupboards"
                className="hover:text-gray-300 relative group"
              >
                Cupboards
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/Sofas"
                className="hover:text-gray-300 relative group"
              >
                Sofas
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/Dinings"
                className="hover:text-gray-300 relative group"
              >
                Dinings
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Social Media Icons for Desktop */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#050e2993] text-white w-64 transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-6">
          <button onClick={toggleSidebar} className="text-white text-3xl mb-6">
            ×
          </button>
          <ul>
            <li>
              <Link href="/" className="block py-2 hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Bedroom" className="block py-2 hover:text-gray-300">
                Bedroom Sets
              </Link>
            </li>
            <li>
              <Link href="/Beds" className="block py-2 hover:text-gray-300">
                Beds
              </Link>
            </li>
            <li>
              <Link href="/Dressers" className="block py-2 hover:text-gray-300">
                Dressers
              </Link>
            </li>
            <li>
              <Link
                href="/Cupboards"
                className="block py-2 hover:text-gray-300"
              >
                Cupboards
              </Link>
            </li>
            <li>
              <Link href="/Sofas" className="block py-2 hover:text-gray-300">
                Sofas
              </Link>
            </li>
            <li>
              <Link href="/Dinings" className="block py-2 hover:text-gray-300">
                Dinings
              </Link>
             
            </li>
          
          </ul>
        </div>
      </div>

      {/* Social Media Icons for Mobile */}
      <div
        className={` flex justify-center items-center ${
          isSidebarOpen ? "block" : ""
        }`}
      >
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition mx-2"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition mx-2"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://wa.me/+923041661939" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition mx-2 flex items-center"
        >
          {/* Pakistani Flag Emoji + WhatsApp Icon */}
          <span className="mr-2 text-xl">🇵🇰</span> {/* Pakistani flag */}
          <FaWhatsapp size={20} />
          <span className="ml-2 text-sm">+92 304 1661939</span>{" "}
          {/* Your phone number */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;

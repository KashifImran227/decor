"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Page: React.FC = () => {
  // Array of background images and corresponding links
  const images = [
    { src: "/bed1.jpg", link: "/bed1" },
    { src: "/bed2.webp", link: "/bed2" },
    { src: "/cupboard.jpg", link: "/cupboard" },
  ];

  // State to hold the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to track the scroll position and update opacity
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // useEffect to track scroll position and update opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update the scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the opacity based on the scroll position
  const getOpacity = () => {
    const opacity = Math.max(1 - scrollPosition / 500, 0.1); // Adjust 500 value for more control
    return opacity;
  };

  return (
    <div className="relative bg-gray-800 text-white">
      {/* Hero Section Background Image with Link */}
      <Link href={images[currentImageIndex].link}>
        <div
          className="absolute inset-0 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }} // Dynamically change background image
        ></div>
      </Link>
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Hero Content */}
      <div className="relative container mx-auto py-32 px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
          Welcome to Furniture Shop
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white drop-shadow-md">
          Find the perfect furniture for your home and style with us. From
          stylish bedroom sets to comfy sofas!
        </p>
        <a
          href="/Products"
          className="bg-yellow-500 text-gray-800 hover:bg-yellow-400 font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Shop Now
        </a>
      </div>

      {/* Marquee Text Below Hero Section */}
      <div className="bg-gray-800 py-4 text-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-white text-xl font-semibold">
          Discover our latest collections, exclusive offers, and new arrivals.
          Shop today and transform your home!
        </div>
      </div>

      {/* Social Media Icons Fixed Bottom Right */}
      <div className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-50">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 hover:bg-blue-500 hover:scale-110 transform transition-all duration-300 ease-in-out"
          style={{ opacity: getOpacity() }} // Dynamically set opacity
        >
          <FaFacebookF size={30} />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 hover:bg-pink-500 hover:scale-110 transform transition-all duration-300 ease-in-out"
          style={{ opacity: getOpacity() }} // Dynamically set opacity
        >
          <FaInstagram size={30} />
        </a>
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+923208264272" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 hover:bg-green-500 hover:scale-110 transform transition-all duration-300 ease-in-out"
          style={{ opacity: getOpacity() }} // Dynamically set opacity
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Furniture Shop</h3>
          <p className="text-gray-400">
            Find the perfect furniture for your home and style. We offer a wide
            variety of high-quality products for every room in your house.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/products" className="hover:text-yellow-500">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="space-y-2">
            <li>📍 123 Furniture Street, New York, NY</li>
            <li>📞 +1 234 567 890</li>
            <li>📧 support@furnitureshop.com</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition duration-300"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-gray-400">
          © 2024 Furniture Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

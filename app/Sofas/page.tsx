"use client";

import React from "react";
import Link from "next/link"; // Don't forget to import Link

// Sofa Data Type
interface Sofa {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const Page: React.FC = () => {
  // Sofa Data with 12 items
  const sofas: Sofa[] = [
    {
      id: 1,
      name: "Sofa 1",
      price: "Rs.69,000",
      imageUrl: "/images/sofa1.jpg",
    },
    {
      id: 2,
      name: "Sofa 2",
      price: "Rs. 80,000",
      imageUrl: "/images/sofa2.jpg",
    },
    {
      id: 3,
      name: "Sofa 3",
      price: "Rs. 80,000",
      imageUrl: "/images/sofa3.jpg",
    },
    {
      id: 4,
      name: "Sofa 4",
      price: "Rs. 97,000",
      imageUrl: "/images/sofa4.jpg",
    },
    {
      id: 5,
      name: "Sofa 5",
      price: "Rs. 103,000",
      imageUrl: "/images/sofa5.jpg",
    },
    {
      id: 6,
      name: "Sofa 6",
      price: "Rs. 122,000",
      imageUrl: "/images/sofa6.jpg",
    },
    {
      id: 7,
      name: "Sofa 7",
      price: "Rs. 57,000",
      imageUrl: "/images/sofa7.jpg",
    },
    {
      id: 8,
      name: "Sofa 8",
      price: "Rs. 54,000",
      imageUrl: "/images/sofa8.jpg",
    },
    {
      id: 9,
      name: "Sofa 9",
      price: "Rs. 80,000",
      imageUrl: "/images/sofa9.jpg",
    },
    {
      id: 10,
      name: "Sofa 10",
      price: "Rs. 150,000",
      imageUrl: "/images/sofa10.jpg",
    },
    {
      id: 11,
      name: "Sofa 11",
      price: "Rs. 169,000",
      imageUrl: "/images/sofa11.jpg",
    },
    {
      id: 12,
      name: "Sofa 12",
      price: "Rs. 142,000",
      imageUrl: "/images/sofa12.jpg",
    },
  ];

  return (
    <div className="w-full py-8 px-4 bg-gray-100">
      {/* Banner */}
      <div className="w-full h-60 mb-8 overflow-hidden relative">
        <img
          src="/images/cupboardbanner.jpg" // Change this to the path of your banner image
          alt="Sofa Collection Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
          <h2 className="text-white text-3xl font-semibold">Sofa Collection</h2>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">Featured Sofas</h1>

      {/* Grid Layout of Sofas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {sofas.map((sofa) => (
          <div
            key={sofa.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            {/* Sofa Image wrapped in Link */}
            <Link href={`/products/${sofa.id}`} passHref>
              <img
                src={sofa.imageUrl}
                alt={sofa.name}
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            {/* Price and Add to Cart Button */}
            <div className="p-4">
              <p className="text-gray-600 text-lg mb-4">{sofa.price}</p>

              <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full hover:bg-yellow-400 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

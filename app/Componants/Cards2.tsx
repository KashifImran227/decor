"use client";
import React from "react";
import Image from "next/image";

const Cards2 = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      {/* Full-width Image 1 (Left side) */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-full overflow-hidden group mb-6 lg:mb-0 lg:mr-4">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src="/images/bed3.jpg" // Correct path inside public/images folder
          alt="King Size Beds"
          width={600}
          height={400}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center transition-opacity duration-300 group-hover:bg-opacity-60">
          <div className="text-center px-6 py-4">
            <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2">
              King Size Beds
            </h3>
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-300 mb-2">
                Starts from
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                59,000 <span className="text-xl text-yellow-300">Pkr</span>
              </h2>
            </div>
            <p className="text-white text-base sm:text-lg font-medium max-w-xs mx-auto leading-relaxed mb-4">
              Comfortable, spacious, and stylish beds designed for the ultimate
              rest. Available in different sizes and styles.
            </p>
            {/* 40% Offer Section */}
            <div className="bg-yellow-500 text-white py-2 px-6 rounded-full text-xl font-bold max-w-max mx-auto">
              <p>Exclusive 40% OFF on All King Size Beds!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Image 2 (Right side) */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-full overflow-hidden group mb-6 lg:mb-0 lg:ml-4">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src="/images/bed5.jpg" // Correct path inside public/images folder
          alt="Premium Bedroom Sets"
          width={600}
          height={400}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center transition-opacity duration-300 group-hover:bg-opacity-60">
          <div className="text-center px-6 py-4">
            <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2">
              Premium Bedroom Sets
            </h3>
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-300 mb-2">
                Starts from
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                130,000 <span className="text-xl text-yellow-300">Pkr</span>
              </h2>
            </div>
            <p className="text-white text-base sm:text-lg font-medium max-w-xs mx-auto leading-relaxed">
              Explore our collection of premium comfort beds, crafted for
              ultimate relaxation and luxury.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;

"use client";
import React from "react";


const Page: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      {/* Hero Section Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/your-image-path.jpg)" }}
      ></div>

      {/* Hero Content */}
      <div className="relative container mx-auto py-32 px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to Furniture Shop
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Find the perfect furniture for your home and style with us. From
          stylish bedroom sets to comfy sofas!
        </p>
       
       
      </div>
    </div>
  );
};

export default Page;

import React from "react";

const Background = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center h-[120vh] mt-8"
      style={{
        backgroundImage: "url(/fix.webp)", // Ensure the image is in the public folder
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Discover Your Dream Home
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">
          From elegant designs to modern comforts, explore furniture that brings
          your vision to life. Scroll down to meet your dreams!
        </p>

        {/* CTA Button */}
        <a
          href="#products"
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Background;

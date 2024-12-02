"use client";
import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#1f1f1f] via-[#2C3E50] to-[#34495E]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide font-poppins">
          About Our Premium Furniture
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Section */}
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-lg text-[#BDC3C7] mb-8 leading-relaxed text-justify font-roboto">
              At our core, we are passionate about creating high-quality
              furniture right here in Pakistan. Our pieces are crafted with
              precision and care, using only the finest, sustainably sourced
              wood. Each item is designed to combine timeless elegance with
              functional durability, ensuring your furniture lasts for
              generations.
            </p>
            <p className="text-lg text-[#BDC3C7] mb-8 leading-relaxed text-justify font-roboto">
              We take immense pride in the legacy of Chinioti craftsmanship,
              known for its intricate detailing and meticulous artistry.
              Chinioti furniture, created by skilled artisans from the region,
              is renowned for its complex woodwork and beautiful patterns.
              Whether it’s a cozy sofa, a statement dining table, or an elegant
              bed frame, our Chinioti-inspired designs bring unmatched artistry
              to your home.
            </p>
            <p className="text-lg text-[#BDC3C7] mb-8 leading-relaxed text-justify font-roboto">
              Our passion for quality, tradition, and design is evident in every
              piece we create. We ensure that each product is carefully crafted
              to reflect the unique artistry of Pakistan, making our furniture a
              blend of beauty, function, and heritage.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative max-h-[500px] rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/hand.jpg" // Correct path relative to the public folder
              alt="Pakistani furniture"
              width={1000} // Adjust based on your design
              height={500} // Adjust based on your design
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-3xl font-semibold text-white px-8 py-3 bg-[#06111f] bg-opacity-80 rounded-lg shadow-lg font-lora">
                Handcrafted to Perfection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

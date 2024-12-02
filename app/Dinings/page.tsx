"use client";
import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimization

// Dining Data Type
interface Dining {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const Page: React.FC = () => {
  // Dining Data with 8 items
  const dinings: Dining[] = [
    {
      id: 1,
      name: "Dining Set 1",
      price: "Pkr 25000",
      imageUrl: "/images/dining1.jpg",
    },
    {
      id: 2,
      name: "Dining Set 2",
      price: "Pkr 30000",
      imageUrl: "/images/dining2.jpg",
    },
    {
      id: 3,
      name: "Dining Set 3",
      price: "Pkr 35000",
      imageUrl: "/images/dining3.jpg",
    },
    {
      id: 4,
      name: "Dining Set 4",
      price: "Pkr 27000",
      imageUrl: "/images/dining4.jpg",
    },
    {
      id: 5,
      name: "Dining Set 5",
      price: "Pkr 32000",
      imageUrl: "/images/dining5.jpg",
    },
    {
      id: 6,
      name: "Dining Set 6",
      price: "Pkr 29000",
      imageUrl: "/images/dining6.jpg",
    },
    {
      id: 7,
      name: "Dining Set 7",
      price: "Pkr 28000",
      imageUrl: "/images/dining7.jpg",
    },
    {
      id: 8,
      name: "Dining Set 8",
      price: "Pkr 26000",
      imageUrl: "/images/dining8.jpg",
    },
  ];

  return (
    <div className="w-full py-8 px-4 bg-gray-100">
      {/* Banner */}
      <div className="w-full h-60 mb-8 overflow-hidden relative">
        <Image
          src="/images/diningbanner.jpg"
          alt="Dining Collection Banner"
          width={1200} // Specify the width for Image optimization
          height={400} // Specify the height for Image optimization
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
          <h2 className="text-white text-3xl font-semibold">
            Dining Collection
          </h2>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Featured Dining Sets
      </h1>

      {/* Grid Layout of Dinings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {dinings.map((dining) => (
          <div
            key={dining.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            {/* Dining Image */}
            <Image
              src={dining.imageUrl}
              alt={dining.name}
              width={400} // Specify the width for Image optimization
              height={250} // Specify the height for Image optimization
              className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Price and Add to Cart Button */}
            <div className="p-4">
              <p className="text-gray-600 text-lg mb-4">{dining.price}</p>

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

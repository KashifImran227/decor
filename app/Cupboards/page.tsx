"use client";
import React, { useState } from "react";

// Define the type for CupboardCard props
interface CupboardCardProps {
  title: string;
  price: number;
  imageUrl: string;
  onClick: (imageUrl: string) => void;
}

// The Card component for Cupboards
const CupboardCard: React.FC<CupboardCardProps> = ({
  title,
  price,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
        onClick={() => onClick(imageUrl)}
      />
      <div className="p-4">
        <h4 className="text-lg font-medium text-black mb-2">{title}</h4>
        <h5 className="text-xl font-semibold text-gray-800 mb-4">
         Rs. {price.toLocaleString()}
        </h5>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full hover:bg-yellow-400 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Modal component for displaying the image in full-screen
interface ModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null; // Don't render if no image URL is provided

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Full screen image"
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          X
        </button>
      </div>
    </div>
  );
};

// Main Page Component
const Page: React.FC = () => {
  // State to track which image is clicked for the modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample data for cupboards with prices and image URLs (10 items)
  const cupboards = new Array(10).fill(null).map((_, index) => ({
    title: `Cupboard ${index + 1}`,
    price: 41000 + index * 7000, // Prices start at 41000 and increase by 7000 for each cupboard
    imageUrl: `/images/cupboard${index + 1}.jpg`, // Image paths are dynamically created
  }));

  // Function to handle image click (open in modal)
  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl); // Set the selected image to be displayed in the modal
  };

  // Function to close the modal
  const handleCloseModal = (): void => {
    setSelectedImage(null); // Reset the selected image to close the modal
  };

  return (
    <div className="w-full py-8 px-4 bg-gray-100">
      {/* Image Above the Search Bar */}
      <div className="w-full h-60 mb-8 overflow-hidden relative rounded-lg shadow-lg">
        <img
          src="./images/cupboardbanner.avif" // Placeholder cover image
          alt="Cupboard Collection Banner"
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
          <h2 className="text-white text-4xl font-semibold drop-shadow-lg">
            Cupboard Collection
          </h2>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">
        Cupboard Collection
      </h1>

      {/* Grid Layout of Cupboards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {cupboards.length > 0 ? (
          cupboards.map((cupboard, index) => (
            <CupboardCard
              key={index}
              title={cupboard.title}
              price={cupboard.price}
              imageUrl={cupboard.imageUrl}
              onClick={handleImageClick} // Pass the image URL for the onClick handler
            />
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-gray-500">
            No cupboards found.
          </p>
        )}
      </div>

      {/* Modal */}
      <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;

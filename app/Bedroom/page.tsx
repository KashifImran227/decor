"use client";
import React, { useState } from "react";

// Define the type for BedroomSetCard props
interface BedroomSetCardProps {
  title: string;
  price: number;
  imageUrl: string; // image URL to be passed from data
  onClick: (imageUrl: string) => void; // Function to handle image click
}

// The Card component for Bedroom Sets
const BedroomSetCard: React.FC<BedroomSetCardProps> = ({
  title,
  price,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300">
      <img
        src={imageUrl} // Dynamically set the image URL for each card
        alt={title}
        className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
        onClick={() => onClick(imageUrl)} // Trigger onClick function when image is clicked
      />
      <div className="p-4">
        <h4 className="text-lg font-medium text-black mb-2">
         Rs. {price.toLocaleString()}
        </h4>
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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Full screen image"
          className="max-w-[90vw] max-h-[90vh] object-contain" // Ensure image does not stretch and maintains its aspect ratio
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
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

  // Sample data for bedroom sets with prices and image URLs
  const bedroomSets = new Array(30).fill(null).map((_, index) => ({
    title: `Bedroom Set ${index + 1}`,
    price: 131000 + index * 8000, // Prices start at 131000 and increase by 8000 for each set
    imageUrl: `/images/set${index + 1}.jpg`, // Image paths are dynamically created
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
      <div className="w-full h-60 mb-8 overflow-hidden relative">
        <img
          src="main.webp"
          alt="Bedroom Sets Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
          <h2 className="text-white text-3xl font-semibold">
            Bedroom Sets Collection
          </h2>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">
        Bedroom Sets Collection
      </h1>

      {/* Grid Layout of Bedroom Sets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {bedroomSets.length > 0 ? (
          bedroomSets.map((set, index) => (
            <BedroomSetCard
              key={index}
              title={set.title}
              price={set.price}
              imageUrl={set.imageUrl}
              onClick={handleImageClick} // Pass the image URL for the onClick handler
            />
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-gray-500">
            No bedroom sets found.
          </p>
        )}
      </div>

      {/* Modal */}
      <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;

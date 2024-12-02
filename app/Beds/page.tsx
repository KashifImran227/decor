"use client";
import React, { useState } from "react";

// Define the type for the ImageCard props
interface ImageCardProps {
  imageUrl: string;
  price: number;
  onClick: (imageUrl: string) => void; // Function type to handle image click
  onAddToCart: (imageUrl: string) => void; // Function type to handle "Add to Cart" action
}

// The Card component that displays each image with price and Add to Cart button.
const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  price,
  onClick,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl">
      <img
        src={imageUrl}
        alt="bed"
        className="w-full h-56 object-cover rounded-md transition-transform transform group-hover:scale-105"
        onClick={() => onClick(imageUrl)} // When clicked, trigger the onClick function passed from parent
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">
          Rs.{price.toLocaleString()}
        </h4>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when adding to cart
            onAddToCart(imageUrl);
          }}
          className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-md w-full hover:bg-yellow-400 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Modal component for displaying the image in full-screen.
interface ModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null; // Don't render if no image URL is provided.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 opacity-0 transition-opacity duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Full screen bed"
          className="max-w-[90vw] max-h-[90vh] object-contain transition-all transform"
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

  // State to manage the items added to the cart
  const [cart, setCart] = useState<string[]>([]);

  // Sample data for image URLs, prices, and titles
  const imageData = new Array(15).fill(null).map((_, index) => ({
    imageUrl: `/images/bed${index + 1}.jpg`, // Replace with actual image paths
    price: 91000 + index * 11000, // Sample price starting from 20,000 PKR and increasing by 1000 PKR per image
  }));

  // Function to handle image click (open in modal)
  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl); // Set the selected image to be displayed in the modal
  };

  // Function to close the modal
  const handleCloseModal = (): void => {
    setSelectedImage(null); // Reset the selected image to close the modal
  };

  // Function to handle "Add to Cart" action
  const handleAddToCart = (imageUrl: string): void => {
    if (!cart.includes(imageUrl)) {
      setCart((prevCart) => [...prevCart, imageUrl]); // Add selected image to the cart if not already in the cart
      alert("Item added to cart!");
    } else {
      alert("This item is already in your cart.");
    }
  };

  // Function to handle item removal from the cart
  const handleRemoveFromCart = (imageUrl: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item !== imageUrl)); // Remove item from the cart
  };

  return (
    <div className="w-full py-8 px-4 bg-gray-100">
      <div className="pt-0">
        {" "}
        {/* Set padding top to 0 */}
        {/* Banner Image */}
        <div className="w-full h-56 mb-8 overflow-hidden relative">
          {" "}
          {/* Reduced image height to 48 */}
          <img
            src="/images/bedbanner.jpg" // Replace with your banner image path
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
            <h2 className="text-white text-3xl font-semibold">
              Discover Our Collection
            </h2>
          </div>
        </div>
        {/* Shop Header */}
        <h2 className="text-3xl font-bold text-center mb-12 ml-7">
          Shop Our Collection
        </h2>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {imageData.map((data, index) => (
            <ImageCard
              key={index}
              imageUrl={data.imageUrl}
              price={data.price}
              onClick={handleImageClick}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        {/* Modal */}
        <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
        {/* Cart Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          {cart.length > 0 ? (
            <ul className="mt-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 flex justify-between items-center"
                >
                  <img
                    src={item}
                    alt={`Cart Item ${index + 1}`}
                    className="w-12 h-12 object-cover inline mr-2"
                  />
                  Item {index + 1}
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

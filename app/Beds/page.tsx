"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  price: number;
  onClick: (imageUrl: string) => void;
  onAddToCart: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  price,
  onClick,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl">
      <Image
        src={imageUrl}
        alt="bed"
        width={300}
        height={224}
        className="w-full h-56 object-cover rounded-md transition-transform transform group-hover:scale-105"
        onClick={() => onClick(imageUrl)}
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">
          Rs.{price.toLocaleString()}
        </h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
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

interface ModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 opacity-0 transition-opacity duration-300">
      <div className="relative">
        <Image
          src={imageUrl}
          alt="Full screen bed"
          width={1000}
          height={700}
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

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);

  const imageData = new Array(15).fill(null).map((_, index) => ({
    imageUrl: `/images/bed${index + 1}.jpg`,
    price: 91000 + index * 11000,
  }));

  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  const handleAddToCart = (imageUrl: string): void => {
    if (!cart.includes(imageUrl)) {
      setCart((prevCart) => [...prevCart, imageUrl]);
      alert("Item added to cart!");
    } else {
      alert("This item is already in your cart.");
    }
  };

  const handleRemoveFromCart = (imageUrl: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item !== imageUrl));
  };

  return (
    <div className="w-full py-8 px-4 bg-gray-100">
      <div className="pt-0">
        <div className="w-full h-56 mb-8 overflow-hidden relative">
          <Image
            src="/images/bedbanner.jpg"
            alt="Banner"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-center">
            <h2 className="text-white text-3xl font-semibold">
              Discover Our Collection
            </h2>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12 ml-7">
          Shop Our Collection
        </h2>
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
        <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          {cart.length > 0 ? (
            <ul className="mt-4">
              {cart.map((item, index) => (
                <li
                  key={item}
                  className="text-lg text-gray-700 flex justify-between items-center"
                >
                  <Image
                    src={item}
                    alt={`Cart Item ${index + 1}`}
                    width={48}
                    height={48}
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

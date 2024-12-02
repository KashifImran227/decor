import React from "react";

// Define types for product data
interface Product {
  id: string;
  name: string;
  price: string;
  images: string[]; // Array of image URLs
}

interface ProductCardProps {
  product: Product;
}

const Products: React.FC = () => {
  const productData: Product[] = [
    {
      id: "Sofa",
      name: "Modern Sofa Set",
      price: "Rs. 55,000",
      images: ["/sofablue.jpg", "/almari.jpg"], // Image array
    },
    {
      id: "Dinings",
      name: "Elegant Dining Table",
      price: "Rs. 82,000",
      images: ["/dining.jpg", "/dining2.jpg"], // Image array
    },
    {
      id: "Beds",
      name: "Queen Size Bed",
      price: "Rs. 129,000",
      images: ["/bedq.jpg", "/bed1.jpg"], // Image array
    },
    {
      id: "Dresser",
      name: "Stylish Dresser",
      price: "Rs. 71,000",
      images: ["/dresser.jpg"], // Image array
    },
    {
      id: "Cupboard1",
      name: "Classic Armchair",
      price: "Rs. 23,000",
      images: ["chair.jpg", "/armchair2.jpg"],
    },
    {
      id: "Sofa2",
      name: "Cozy Dewan",
      price: "Rs. 30,000",
      images: ["/dewan.jpg", "/recliner2.jpg"],
    },
    {
      id: "dinings",
      name: "Luxury Coffee Table",
      price: "Rs. 47,000",
      images: ["/coffeetable.jpg", "/coffeetable2.jpg"],
    },
    {
      id: "Cupboards",
      name: "Elegant Almari",
      price: "Rs. 67,000",
      images: ["/almari.jpg", "/bookshelf2.jpg"],
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Define the ProductCard component with type annotation
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-64 w-full">
        {/* Remove Link around the image to stop navigation */}
        <img
          src={product.images[0]} // Display the first image in the array
          alt={product.name}
          className="h-full w-full object-cover rounded-t-lg transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-lg mb-4">{product.price}</p>

        {/* Add to Cart Button */}
        <button className="mt-4 bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;

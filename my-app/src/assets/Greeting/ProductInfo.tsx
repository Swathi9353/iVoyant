// ProductInfo.tsx
import React from 'react';

interface Product {
  name: string;
  price: string;
  availability: string;
}

const ProductInfo: React.FC = () => {
  const product: Product = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock"
  };

  return (
    <div>
      <h2>Product Details:</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
}

export default ProductInfo;

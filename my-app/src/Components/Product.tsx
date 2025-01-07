import React from 'react';

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <div>
      <h2>Product: {props.name}</h2>
      <p>Price: ${props.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;

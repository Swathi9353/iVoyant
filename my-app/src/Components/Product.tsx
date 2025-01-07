import React from 'react';
import { ProductProps } from './Interface';
const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {"price"}</p>
    </div>
  );
}

export default Product;
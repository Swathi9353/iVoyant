import React from 'react';
import { ProductProps } from '../types/types';
const Product: React.FC<ProductProps> = (props) => {
  return (
    <div>
      <h2>Product: {props.name}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Product;

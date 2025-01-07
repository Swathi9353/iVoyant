import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.name}, Price: {product.price}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

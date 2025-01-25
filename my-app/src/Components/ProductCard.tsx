// import React from "react";
// import "./Style.css"

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductCardProps {
//   product: Product;
//   addToCart: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} className="card-image" />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

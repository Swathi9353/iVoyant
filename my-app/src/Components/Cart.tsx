import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartProps {
  cartItems: Product[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from "react";
import "./App.css";


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const productList = data.slice(0,10).map((item: any, index: number) => ({
        id: index,
        name: item.title,
        description: item.description,
        price: item.price,  
        image: item.image
        
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price,0);
  };

  return (
    <div className="app">
      <h1>Product Store</h1>
      <div className="header">
        <button
          className="cart-toggle-button"
          onClick={() => setShowCart((prev) => !prev)}
        >
            
    {showCart ? "Hide Cart" : `Show Cart (${cart.length})`}

        </button>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img
                className="card-image"
                src={product.image}
                alt={product.name}
              />
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <p className="card-price">${product.price.toFixed(2)}</p>
                <button
                  className="card-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length > 0 ? (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>
                      {item.name} - ${item.price.toFixed(2)}
                    </span>
                    <button
                      className="delete-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <h3>Total Price: ${calculateTotalPrice()}</h3>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

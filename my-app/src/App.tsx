import React, { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="app">
      <h1>Product Store</h1>
      <div className="products">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;

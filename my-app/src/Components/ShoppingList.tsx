import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the shape of the shopping item
interface ShoppingItem {
  name: string;
  quantity: string;
}

function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [newItem, setNewItem] = useState<ShoppingItem>({
    name: "",
    quantity: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.name.trim() && newItem.quantity.trim()) {
      setItems([...items, newItem]);
      setNewItem({ name: "", quantity: "" });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item Name"
        />
        <input
          type="text"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

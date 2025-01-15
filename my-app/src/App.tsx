import React from "react";
import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import ShoppingList from "./Components/ShoppingList";

function App() {
  return (
    <div>
      <h1>React useState Examples</h1>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;

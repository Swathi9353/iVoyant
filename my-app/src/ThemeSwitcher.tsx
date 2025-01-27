import React, { useState, useEffect } from "react";
// import "./ThemeSwitcher.css";
import "./App.css";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the selected theme class to the body element
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;

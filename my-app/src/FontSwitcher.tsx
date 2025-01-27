import React, { useState } from "react";
import "./FontSwitcher.css"; // Import the CSS file

const FontSwitcher = () => {
  const [fontStyle, setFontStyle] = useState<string>("serif");

  const handleFontChange = (newFont: string) => {
    setFontStyle(newFont);
  };

  return (
    <div className={fontStyle}>
      <h1>Font Style Switcher</h1>
      <p>This text will change its font style based on the selected option.</p>
      <div>
        <button onClick={() => handleFontChange("serif")}>Serif</button>
        <button onClick={() => handleFontChange("sans-serif")}>
          Sans-serif
        </button>
        <button onClick={() => handleFontChange("monospace")}>Monospace</button>
      </div>
    </div>
  );
};

export default FontSwitcher;

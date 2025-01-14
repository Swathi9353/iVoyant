import React, { useState } from "react"

const EventDemo: React.FC = () => {
  const [buttonText, setbuttontext] = useState("click the button");
  const [copiedText, setcopiedtext] = useState("copy the text");
  const [hoverColor, sethovercolor] = useState("white");

  const handleButtonClick = () => {
    setbuttontext("button clicked");
  };

  const handleTextCopy = () => {
    setcopiedtext("text copied");
  };

  const handleMouseOver = () => {
    sethovercolor("lightyellow");
  };

  const handleMouseOut = () => {
    sethovercolor("white");
  };                                                                                                                        

  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
      <div>
        <p onCopy={handleTextCopy}>{copiedText}</p>
      </div>
      <div>
        <p
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: hoverColor }}
        >Hover on this text
      
        </p>
      </div>
    </div>
  );
};
export default EventDemo;
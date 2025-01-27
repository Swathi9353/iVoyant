import React, { useState } from "react";
import Form from "./Form";
import WordSearch from "./WordSearch";
import FontSwitcher from "./FontSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  const [word, setWord] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Word Search</h1>
      <Form onSearch={setWord} />
      {word && <WordSearch word={word} />}
      <FontSwitcher />
      <ThemeSwitcher/>
    </div>
  );
};

export default App;

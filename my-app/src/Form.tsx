import React, { useState } from "react";


const Form = ({ onSearch }: { onSearch: (word: string) => void }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a word.");
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a word"
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        type="submit"
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        Search
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;

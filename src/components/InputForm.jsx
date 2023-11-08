import React, { useState } from "react";

function InputForm() {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(inputText);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Upiši tekst:" value={inputText} onChange={handleChange} />
        <button type="submit">Potvrdi</button>
      </form>
      <p>Uneseno: {submittedText}</p>
    </div>
  );
}

export default InputForm;
